import React, { useState, useEffect } from 'react';
import { Trophy, Timer, Save, Clock, CheckSquare, XSquare } from 'lucide-react';
import { useExercises } from '../context/ExerciseContext';
import { supabase } from '../lib/supabase';

interface ExerciseResult {
  exerciseId: string;
  result: string;
  time?: string;
  completed: boolean;
  notValid: boolean;
}

interface AthleteResult {
  id: string;
  name: string;
  date: string;
  timecap: string;
  results: ExerciseResult[];
}

function AthleteResults() {
  const { exercises } = useExercises();
  const [athleteResults, setAthleteResults] = useState<AthleteResult[]>([]);
  const [name, setName] = useState('');
  const [timecap, setTimecap] = useState('');
  const [exerciseResults, setExerciseResults] = useState<ExerciseResult[]>(
    exercises.map(exercise => ({
      exerciseId: exercise.id,
      result: '',
      time: '',
      completed: false,
      notValid: false,
    }))
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const { data: workoutResults, error: workoutError } = await supabase
        .from('workout_results')
        .select(`
          id,
          athlete_name,
          timecap,
          date,
          exercise_results (
            id,
            exercise_name,
            exercise_value,
            result,
            time,
            completed,
            not_valid
          )
        `)
        .order('date', { ascending: false });

      if (workoutError) throw workoutError;

      const formattedResults: AthleteResult[] = workoutResults.map(workout => ({
        id: workout.id,
        name: workout.athlete_name,
        date: workout.date,
        timecap: workout.timecap,
        results: workout.exercise_results.map(exercise => ({
          exerciseId: exercise.id,
          result: exercise.result || '',
          time: exercise.time || '',
          completed: exercise.completed,
          notValid: exercise.not_valid,
        })),
      }));

      setAthleteResults(formattedResults);
    } catch (error) {
      console.error('Error fetching results:', error);
      alert('Failed to fetch results');
    }
  };

  const handleResultChange = (exerciseId: string, value: string) => {
    setExerciseResults(prev =>
      prev.map(result =>
        result.exerciseId === exerciseId && !result.completed && !result.notValid
          ? { ...result, result: value }
          : result
      )
    );
  };

  const handleTimeChange = (exerciseId: string, value: string) => {
    setExerciseResults(prev =>
      prev.map(result =>
        result.exerciseId === exerciseId && !result.completed && !result.notValid
          ? { ...result, time: value }
          : result
      )
    );
  };

  const handleCompletionChange = (exerciseId: string, completed: boolean) => {
    const exercise = exercises.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    setExerciseResults(prev =>
      prev.map(result =>
        result.exerciseId === exerciseId
          ? {
              ...result,
              completed,
              notValid: false,
              result: completed ? exercise.value : '',
              time: completed ? timecap : '',
            }
          : result
      )
    );
  };

  const handleNotValidChange = (exerciseId: string, notValid: boolean) => {
    setExerciseResults(prev =>
      prev.map(result =>
        result.exerciseId === exerciseId
          ? {
              ...result,
              notValid,
              completed: false,
              result: '',
              time: '',
            }
          : result
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter athlete name');
      return;
    }

    if (!timecap.trim()) {
      alert('Please enter the timecap');
      return;
    }

    if (!exerciseResults.some(result => result.result.trim() || result.completed || result.notValid)) {
      alert('Please enter at least one result, mark as completed, or mark as not valid');
      return;
    }

    setLoading(true);

    try {
      // Insert workout result
      const { data: workoutData, error: workoutError } = await supabase
        .from('workout_results')
        .insert({
          athlete_name: name,
          timecap,
          date: new Date().toISOString(),
        })
        .select()
        .single();

      if (workoutError) throw workoutError;

      // Insert exercise results
      const exerciseResultsToInsert = exercises.map((exercise, index) => {
        const result = exerciseResults[index];
        return {
          workout_result_id: workoutData.id,
          exercise_name: exercise.name,
          exercise_value: exercise.value,
          result: result.result,
          time: result.time,
          completed: result.completed,
          not_valid: result.notValid,
        };
      });

      const { error: exerciseError } = await supabase
        .from('exercise_results')
        .insert(exerciseResultsToInsert);

      if (exerciseError) throw exerciseError;

      // Refresh results
      await fetchResults();

      // Reset form
      setName('');
      setTimecap('');
      setExerciseResults(
        exercises.map(exercise => ({
          exerciseId: exercise.id,
          result: '',
          time: '',
          completed: false,
          notValid: false,
        }))
      );
    } catch (error) {
      console.error('Error saving results:', error);
      alert('Failed to save results');
    } finally {
      setLoading(false);
    }
  };

  const getExerciseById = (id: string) => {
    return exercises.find(ex => ex.id === id);
  };

  if (exercises.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="text-center py-12">
            <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Exercises Available</h2>
            <p className="text-gray-600">Please create exercises in the WOD Builder first.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-900">Athlete Results</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Athlete Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter athlete name"
                required
              />
            </div>
            <div>
              <label htmlFor="timecap" className="block text-sm font-medium text-gray-700 mb-1">
                Timecap *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="timecap"
                  value={timecap}
                  onChange={(e) => setTimecap(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter timecap (e.g., 20:00)"
                  required
                />
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Exercise Results</h2>
            {exercises.map((exercise) => {
              const result = exerciseResults.find(r => r.exerciseId === exercise.id);
              const completed = result?.completed || false;
              const notValid = result?.notValid || false;

              return (
                <div key={exercise.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium text-gray-900">{exercise.name}</h3>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleNotValidChange(exercise.id, !notValid)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                          notValid
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        disabled={completed}
                      >
                        <XSquare size={16} className={notValid ? 'text-red-600' : ''} />
                        {notValid ? 'Not Valid' : 'Mark Invalid'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCompletionChange(exercise.id, !completed)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
                          completed
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        disabled={notValid}
                      >
                        <CheckSquare size={16} className={completed ? 'text-green-600' : ''} />
                        {completed ? 'Completed' : 'Mark Complete'}
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Result (Reps) *
                      </label>
                      <input
                        type="number"
                        value={result?.result || ''}
                        onChange={(e) => handleResultChange(exercise.id, e.target.value)}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          completed || notValid ? 'bg-gray-100 cursor-not-allowed' : ''
                        }`}
                        placeholder={
                          completed
                            ? 'Maximum value set'
                            : notValid
                            ? 'Not valid'
                            : 'Enter number of reps'
                        }
                        disabled={completed || notValid}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Time (Optional)
                      </label>
                      <input
                        type="text"
                        value={result?.time || ''}
                        onChange={(e) => handleTimeChange(exercise.id, e.target.value)}
                        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          completed || notValid ? 'bg-gray-100 cursor-not-allowed' : ''
                        }`}
                        placeholder={
                          completed
                            ? 'Timecap set'
                            : notValid
                            ? 'Not valid'
                            : 'Enter time (e.g., 10:30)'
                        }
                        disabled={completed || notValid}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save size={20} /> {loading ? 'Saving...' : 'Save Results'}
          </button>
        </form>

        {/* Results Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Athlete
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exercise
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Result
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timecap
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {athleteResults.map((athleteResult) => (
                athleteResult.results.map((result, index) => {
                  const exercise = getExerciseById(result.exerciseId);
                  return (
                    <tr key={`${athleteResult.id}-${index}`} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {athleteResult.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {exercise?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {result.notValid ? 'Not Valid' : `${result.result} reps`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {result.time && !result.notValid && (
                          <div className="flex items-center gap-1">
                            <Timer size={16} />
                            {result.time}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {athleteResult.timecap}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {result.notValid ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <XSquare size={12} />
                            Not Valid
                          </span>
                        ) : result.completed ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <CheckSquare size={12} />
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Partial
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              ))}
              {athleteResults.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    No results recorded yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AthleteResults;
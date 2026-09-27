import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Dumbbell, Users } from 'lucide-react';
import WorkoutBuilder from './pages/WorkoutBuilder';
import AthleteResults from './pages/AthleteResults';
import { ExerciseProvider } from './context/ExerciseContext';

function App() {
  return (
    <ExerciseProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  <Dumbbell className="h-6 w-6 mr-2" />
                  <span className="font-semibold">WOD Builder</span>
                </Link>
                <Link
                  to="/results"
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  <Users className="h-6 w-6 mr-2" />
                  <span className="font-semibold">Athlete Results</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<WorkoutBuilder />} />
            <Route path="/results" element={<AthleteResults />} />
          </Routes>
        </div>
      </div>
    </ExerciseProvider>
  );
}

export default App;

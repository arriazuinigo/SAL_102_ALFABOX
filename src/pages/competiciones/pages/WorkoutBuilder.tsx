import React, { useState } from 'react';
import { Plus, Trash2, Clock, Hash, GripVertical } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useExercises } from '../context/ExerciseContext';

interface Exercise {
  id: string;
  name: string;
  value: string;
  type: 'time' | 'reps';
}

interface SortableRowProps {
  exercise: Exercise;
  onRemove: (id: string) => void;
}

function SortableRow({ exercise, onRemove }: SortableRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: exercise.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
    position: 'relative' as const,
    backgroundColor: isDragging ? '#f3f4f6' : undefined,
  };

  return (
    <tr ref={setNodeRef} style={style} className="group hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing mr-2 text-gray-400 hover:text-gray-600"
          {...attributes}
          {...listeners}
        >
          <GripVertical size={20} />
        </button>
        <span className="text-sm font-medium text-gray-900">{exercise.name}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {exercise.value} {exercise.type === 'time' ? 'min' : 'reps'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onRemove(exercise.id)}
          className="text-red-600 hover:text-red-900"
        >
          <Trash2 size={20} />
        </button>
      </td>
    </tr>
  );
}

function WorkoutBuilder() {
  const { exercises, setExercises } = useExercises();
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseValue, setExerciseValue] = useState('');
  const [valueType, setValueType] = useState<'time' | 'reps'>('time');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addExercise = () => {
    if (!exerciseName.trim()) {
      alert('Exercise name is required');
      return;
    }

    if (!exerciseValue.trim()) {
      alert('Please specify time or reps');
      return;
    }

    const newExercise: Exercise = {
      id: crypto.randomUUID(),
      name: exerciseName,
      value: exerciseValue,
      type: valueType,
    };

    setExercises([...exercises, newExercise]);
    setExerciseName('');
    setExerciseValue('');
  };

  const removeExercise = (id: string) => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setExercises((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">CrossFit WOD Builder</h1>
        
        {/* Input Form */}
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="exercise-name" className="block text-sm font-medium text-gray-700 mb-1">
                Exercise Name *
              </label>
              <input
                type="text"
                id="exercise-name"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter exercise name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="value-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setValueType('time')}
                    className={`flex-1 px-4 py-2 rounded-md flex items-center justify-center gap-2 ${
                      valueType === 'time'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Clock size={16} /> Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setValueType('reps')}
                    className={`flex-1 px-4 py-2 rounded-md flex items-center justify-center gap-2 ${
                      valueType === 'reps'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Hash size={16} /> Reps
                  </button>
                </div>
              </div>
              
              <div>
                <label htmlFor="exercise-value" className="block text-sm font-medium text-gray-700 mb-1">
                  {valueType === 'time' ? 'Time' : 'Reps'}
                </label>
                <input
                  type={valueType === 'time' ? 'text' : 'number'}
                  id="exercise-value"
                  value={exerciseValue}
                  onChange={(e) => setExerciseValue(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={valueType === 'time' ? '00:00' : '0'}
                />
              </div>
            </div>
          </div>
          
          <button
            onClick={addExercise}
            className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={20} /> Add Exercise
          </button>
        </div>

        {/* Exercise Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Exercise Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time/Reps
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={exercises}
                  strategy={verticalListSortingStrategy}
                >
                  {exercises.map((exercise) => (
                    <SortableRow
                      key={exercise.id}
                      exercise={exercise}
                      onRemove={removeExercise}
                    />
                  ))}
                </SortableContext>
              </DndContext>
              {exercises.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                    No exercises added yet
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

export default WorkoutBuilder;
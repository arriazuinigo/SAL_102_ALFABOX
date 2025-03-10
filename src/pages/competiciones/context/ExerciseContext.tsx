import React, { createContext, useContext, useState } from 'react';

interface Exercise {
  id: string;
  name: string;
  value: string;
  type: 'time' | 'reps';
}

interface ExerciseContextType {
  exercises: Exercise[];
  setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

const ExerciseContext = createContext<ExerciseContextType | undefined>(undefined);

export function ExerciseProvider({ children }: { children: React.ReactNode }) {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  return (
    <ExerciseContext.Provider value={{ exercises, setExercises }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export function useExercises() {
  const context = useContext(ExerciseContext);
  if (context === undefined) {
    throw new Error('useExercises must be used within an ExerciseProvider');
  }
  return context;
}
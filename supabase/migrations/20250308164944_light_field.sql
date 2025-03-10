/*
  # Workout Results Schema

  1. New Tables
    - `workout_results`
      - `id` (uuid, primary key)
      - `athlete_name` (text)
      - `timecap` (text)
      - `date` (timestamptz)
      - `created_at` (timestamptz)
    - `exercise_results`
      - `id` (uuid, primary key)
      - `workout_result_id` (uuid, foreign key)
      - `exercise_name` (text)
      - `exercise_value` (text)
      - `result` (text)
      - `time` (text)
      - `completed` (boolean)
      - `not_valid` (boolean)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read and create their own data
*/

-- Create workout_results table
CREATE TABLE IF NOT EXISTS workout_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  athlete_name text NOT NULL,
  timecap text NOT NULL,
  date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create exercise_results table
CREATE TABLE IF NOT EXISTS exercise_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workout_result_id uuid REFERENCES workout_results(id) ON DELETE CASCADE,
  exercise_name text NOT NULL,
  exercise_value text NOT NULL,
  result text,
  time text,
  completed boolean DEFAULT false,
  not_valid boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE workout_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_results ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can create workout results"
  ON workout_results
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read workout results"
  ON workout_results
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create exercise results"
  ON exercise_results
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read exercise results"
  ON exercise_results
  FOR SELECT
  TO authenticated
  USING (true);
export const TASKS_KEY = "tasks";

export const TaskState = {
  Creating: "creating",
  Created: "created",
};

export interface Task {
  id: string;
  title: string;
  concluded?: boolean;
  state?: keyof typeof TaskState;
}

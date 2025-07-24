import type { ITaskItem } from "@lib/types";

interface taskFormProps {
  task: ITaskItem;
}

export const TaskForm = ({ task }: taskFormProps) => {
  return <div>{task.title}</div>;
};

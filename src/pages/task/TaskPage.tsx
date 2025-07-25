import { useParams } from 'react-router';
import { useTaskStore } from '@store/index';
import { TaskForm } from '@components/taskForm/TaskForm';

export const TaskPage = () => {
  const params = useParams();
  const task = useTaskStore((state) => state.tasks.find((t) => t.id === Number(params.id)));

  return task ? <TaskForm task={task} /> : <div>Task not found</div>;
};

import { Button } from '@mantine/core';
import { TaskList } from '@components/index';
import { useTaskStore } from '@store/index';

export const HomePage = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const { addMockTasks } = useTaskStore();

  return (
    <div>
      <TaskList tasks={tasks} />
      <Button onClick={addMockTasks}>Add mock tasks</Button>
    </div>
  );
};

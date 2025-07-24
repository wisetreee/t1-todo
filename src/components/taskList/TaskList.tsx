import type { ITaskItem } from '@lib/types';
import { SimpleGrid } from '@mantine/core';
import { TaskItem } from '../taskItem/TaskItem';

interface TaskListProps {
  tasks: ITaskItem[];
}
export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 10 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} href={`/task/${task.id}`} />
      ))}
    </SimpleGrid>
  );
};

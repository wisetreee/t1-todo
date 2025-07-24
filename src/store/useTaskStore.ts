import { create } from 'zustand';
import { Category, Priority, Status, type ITaskItem } from '@lib/types';
import { persist } from 'zustand/middleware';

type TaskStore = {
  tasks: ITaskItem[];
  addTask: (task: ITaskItem) => void;
  updateTask: (task: ITaskItem) => void;
  deleteTask: (task: ITaskItem) => void;
  addMockTasks: () => void;
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      addTask: (task: ITaskItem) => set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: (task: ITaskItem) =>
        set((state) => ({ tasks: state.tasks.map((t) => (t.id === task.id ? task : t)) })),
      deleteTask: (task: ITaskItem) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== task.id) })),
      addMockTasks: () => {
        const mockTasks: ITaskItem[] = [
          {
            id: 1,
            title: 'Fix login page bug',
            description: 'Users cannot login with Google auth',
            status: Status.Todo,
            category: Category.Bug,
            createdAt: new Date('2023-05-10'),
            priority: Priority.High,
          },
          {
            id: 2,
            title: 'Implement dark mode',
            description: 'Add theme toggle and dark styles',
            status: Status.InProgress,
            category: Category.Feature,
            createdAt: new Date('2023-05-12'),
            priority: Priority.Medium,
          },
          {
            id: 3,
            title: 'Update documentation',
            description: 'Add new API endpoints to docs',
            status: Status.Done,
            category: Category.Documentation,
            createdAt: new Date('2023-05-01'),
            priority: Priority.Low,
          },
          {
            id: 4,
            title: 'Refactor auth service',
            description: 'Split into smaller modules',
            status: Status.Todo,
            category: Category.Refactor,
            createdAt: new Date('2023-05-15'),
            priority: Priority.Medium,
          },
          {
            id: 5,
            title: 'Write unit tests',
            description:
              'Cover utils functions with testsyrtytyyryyyddgyyyy\nyyyyyyyyyyyyytytyyryyyddgyyyyfgfgfdgfgdfgdgfdgdgdgdfgdfgdgfdfgfdg\nyyyytytyyryyyddg\nyyyyyyyytytyyryyydd\ngyyyyyyyytytyyryyyddgyyyyyyyytytyyryyyddgyyyyyyyytytyyryyyddgyyyyyyyyyyyyyyyyyf',
            status: Status.InProgress,
            category: Category.Test,
            createdAt: new Date('2023-05-14'),
            priority: Priority.High,
          },
          {
            id: 6,
            title: 'Fix mobile layout',
            description: 'Buttons are overlapping on small screens',
            status: Status.Todo,
            category: Category.Bug,
            createdAt: new Date('2023-05-16'),
            priority: Priority.High,
          },
          {
            id: 7,
            title: 'Add analytics dashboard',
            description: 'Show user activity metrics',
            status: Status.Todo,
            category: Category.Feature,
            createdAt: new Date('2023-05-17'),
            priority: Priority.Medium,
          },
        ];

        set({ tasks: mockTasks });
      },
    }),
    {
      name: 'task-store',
    },
  ),
);

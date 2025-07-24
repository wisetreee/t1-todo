
export const Status = {
  Todo: 'Todo',
  InProgress: 'In progress',
  Done: 'Done',
} as const;

export const Category = {
  Bug: 'Bug',
  Feature: 'Feature',
  Documentation: 'Documentation',
  Refactor: 'Refactor',
  Test: 'Test',
} as const;

export const Priority = {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High',
} as const;

type Status = (typeof Status)[keyof typeof Status];

type Category = (typeof Category)[keyof typeof Category];

type Priority = (typeof Priority)[keyof typeof Priority];

export interface ITaskItem {
  id: number;
  title: string;
  description?: string;
  status: Status;
  category: Category;
  createdAt: Date;
  priority: Priority;
}


export const TaskTheme = {
  status: {
    [Status.Todo]: 'gray',
    [Status.InProgress]: 'blue',
    [Status.Done]: 'green',
  },
  category: {
    [Category.Bug]: 'red',
    [Category.Feature]: 'indigo',
    [Category.Documentation]: 'teal',
    [Category.Refactor]: 'yellow',
    [Category.Test]: 'violet',
  },
  priority: {
    [Priority.Low]: 'green',
    [Priority.Medium]: 'orange',
    [Priority.High]: 'red',
  },
} as const;
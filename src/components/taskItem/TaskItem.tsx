import { Card, Text, Title, Stack, Group, Badge, ActionIcon, type CardProps } from '@mantine/core';
import { type ITaskItem, TaskTheme } from '@/lib/types';
import { Clock, Trash } from 'lucide-react';

interface TaskItemProps extends CardProps {
  task: ITaskItem;
  href: string;
  onClose: () => void;
}

export const TaskItem = ({ task, href, onClose, ...props }: TaskItemProps) => {
  return (
    <Card shadow="sm" withBorder p="lg" radius="md" component="a" href={href} {...props}>
      <Stack justify="space-between" align="flex-start" h={'100%'}>
        <Stack w={'100%'}>
          <Stack align="flex-start" gap={8}>
            <Group w={'100%'} justify="space-between" wrap="nowrap" align="flex-start">
              <Title ta="left" lineClamp={2} order={4}>
                {task.title}
              </Title>
              <ActionIcon
                bg={'rgba(219, 47, 47, 0.84)'}
                onClick={(e) => {
                  e.stopPropagation(); // Останавливаем всплытие
                  e.preventDefault(); // Отменяем действие ссылки
                  onClose();
                }}
              >
                <Trash size={16} />
              </ActionIcon>
            </Group>
            <Badge color={TaskTheme.status[task.status]} variant="light">
              {task.status}
            </Badge>
          </Stack>

          {task.description && (
            <Text ta="left" size="sm" lineClamp={3} c="dimmed">
              {task.description}
            </Text>
          )}
        </Stack>
        <Stack gap={16} w={'100%'}>
          <Group gap="xs" mt="sm">
            <Badge color={TaskTheme.category[task.category]} variant="outline">
              {task.category}
            </Badge>
            <Badge color={TaskTheme.priority[task.priority]} variant="dot">
              {task.priority}
            </Badge>
          </Group>
          <Group gap={8}>
            <Clock size={16} color="gray" />
            <Text size="xs" c="gray">
              {new Date(task.createdAt).toLocaleDateString()}
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

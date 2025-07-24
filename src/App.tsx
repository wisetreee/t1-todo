import '@mantine/core/styles.css';

import { AppShell, Burger, createTheme, Group, MantineProvider, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HomePage, TaskPage } from '@pages/index';
import { Route, Routes } from 'react-router';

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'blue',
});

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <div>t1-todo</div>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <NavLink href="/" label="With icon" />
        </AppShell.Navbar>

        <AppShell.Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="task/:id" element={<TaskPage />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;

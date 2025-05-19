import { createTheme, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

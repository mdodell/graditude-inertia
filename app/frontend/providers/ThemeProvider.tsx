import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
    /** Put your mantine theme override here */
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

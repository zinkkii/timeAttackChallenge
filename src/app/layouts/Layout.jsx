"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/system";
import theme from "../assets/theme/theme";
import { Container, Typography, Box } from "@mui/material";

const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ my: 5 }}>
        <Typography variant="h5">TimeAttackChallenge</Typography>
        <Box
          sx={{
            my: 5,
            mx: 2,
            flexGrow: 1,
            width: "100%",
          }}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

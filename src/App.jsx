import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { ThemeProvider } from 'styled-components';
const queryClient = new QueryClient();
import { GlobalTheme } from './theme';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        

        <Route path="/show/:showId" element={ <Show/>} />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
    </GlobalTheme>

    </QueryClientProvider>
  );
}

export default App;

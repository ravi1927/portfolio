import React from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App.jsx';
import './styles.css';

const theme = createTheme({
  palette: { mode: 'dark', primary: { main: '#7c8cff' }, secondary: { main: '#48d6c6' }, background: { default: '#0b1020', paper: '#121a30' }, text: { primary: '#f4f6ff', secondary: '#a8b1cc' } },
  typography: { fontFamily: '"DM Sans", sans-serif', h1: { fontFamily: '"Space Grotesk", sans-serif' }, h2: { fontFamily: '"Space Grotesk", sans-serif' }, h3: { fontFamily: '"Space Grotesk", sans-serif' } },
  shape: { borderRadius: 16 },
  components: { MuiButton: { styleOverrides: { root: { textTransform: 'none', fontWeight: 700, borderRadius: 999, padding: '10px 20px' } } }, MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } } }
});
createRoot(document.getElementById('root')).render(<React.StrictMode><ThemeProvider theme={theme}><CssBaseline /><App /></ThemeProvider></React.StrictMode>);
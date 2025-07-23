import { createTheme } from '@mui/material/styles';

// Rippleshot Brand Colors
const brandColors = {
  // Primary Palette
  rippleshotBlue: '#0069B1',
  rippleshotPurple: '#4C4184',
  darkBlue: '#002F6C',
  brightBlue: '#0084d5',
  grayscale: '#4d4d4f',
  
  // Secondary Palette (Accents)
  rippleshotGreen: '#007681',
  rippleshotOrange: '#FF9E1B',
  rippleshotRed: '#E10600',
  
  // Neutral Palette for modern UI
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  }
};

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brandColors.rippleshotBlue,
      light: brandColors.brightBlue,
      dark: brandColors.darkBlue,
      contrastText: '#ffffff',
    },
    secondary: {
      main: brandColors.rippleshotPurple,
      light: '#6d5fa7',
      dark: '#362d5c',
      contrastText: '#ffffff',
    },
    error: {
      main: brandColors.rippleshotRed,
      light: '#ff4444',
      dark: '#b71c1c',
    },
    warning: {
      main: brandColors.rippleshotOrange,
      light: '#ffb74d',
      dark: '#e65100',
    },
    success: {
      main: brandColors.rippleshotGreen,
      light: '#4db6ac',
      dark: '#004d40',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: brandColors.neutral[900],
      secondary: brandColors.neutral[600],
    },
    divider: brandColors.neutral[200],
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#fafafa',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)',
          border: '1px solid #f0f0f0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: '0.75rem',
          height: 24,
        },
        colorError: {
          backgroundColor: '#ffebee',
          color: brandColors.rippleshotRed,
        },
        colorWarning: {
          backgroundColor: '#fff8e1',
          color: brandColors.rippleshotOrange,
        },
        colorSuccess: {
          backgroundColor: '#e8f5e8',
          color: brandColors.rippleshotGreen,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#f8f9fa',
          '& .MuiTableCell-head': {
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: brandColors.neutral[700],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${brandColors.neutral[200]}`,
          padding: '12px 16px',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: brandColors.brightBlue,
      light: '#42a5f5',
      dark: brandColors.darkBlue,
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8e7cc3',
      light: '#b39ddb',
      dark: brandColors.rippleshotPurple,
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#ff6659',
      dark: brandColors.rippleshotRed,
    },
    warning: {
      main: '#ff9800',
      light: brandColors.rippleshotOrange,
      dark: '#e65100',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: brandColors.rippleshotGreen,
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#1e1e1e',
          border: '1px solid #333333',
          boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          padding: '8px 16px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 8px 0 rgba(0, 132, 213, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: '0.75rem',
          height: 24,
        },
        colorError: {
          backgroundColor: '#3d1a1a',
          color: '#f48fb1',
        },
        colorWarning: {
          backgroundColor: '#3d2f1a',
          color: '#ffcc80',
        },
        colorSuccess: {
          backgroundColor: '#1a3d1a',
          color: '#a5d6a7',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a2a2a',
          '& .MuiTableCell-head': {
            fontWeight: 600,
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#b3b3b3',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #333333',
          padding: '12px 16px',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

// Usage Example
export const getTheme = (mode) => {
  return mode === 'dark' ? darkTheme : lightTheme;
};
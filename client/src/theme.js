import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000', // font color for primary
    },
    secondary: {
      main: '#dc004e',
      contrastText: '#fff', // font color for secondary
    },
    text: {
      primary: '#E6B17E', // general text color
      secondary: '#99592A', // secondary text color
    },
  },
  typography: {
    fontFamily: 'Abhaya Libre',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: '#E6B17E', // apply text primary color
          },
          '& .MuiInputLabel-root': {
            color: '#99592A', // apply text secondary color
            '&.Mui-focused': {
              color: '#99592A', // apply text secondary color when focused
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E6B17E', // change the border color if needed
            },
            '&:hover fieldset': {
              borderColor: '#99592A', // change the border color on hover if needed
            },
            '&.Mui-focused fieldset': {
              borderColor: '#E6B17E', // change the border color when focused if needed
            },
          },
        },
      },
    },
  },
});

export default theme;

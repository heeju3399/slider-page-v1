import './App.css';
import { AIndex } from './main/AIndex';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#0e0c0f',
          },
          // ...other tokens
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#f1edf5',
          },
          // ...other tokens
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AIndex />
    </ThemeProvider>
  );
}

export default App;

// const theme = createMuiTheme();

// const useStyles = makeStyles((theme) => {
//   root: {
//     // some CSS that accesses the theme
//   }
// });

// function App() {
//   const classes = useStyles(); // ❌ If you have this, consider moving it
//   // inside of a component wrapped with <ThemeProvider />
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// }

// import { createTheme } from '@mui/material/styles';
// import { blue } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       light: blue[300],
//       main: blue[500],
//       dark: blue[700],
//       darker: blue[900],
//     },
//   },
// });

// const theme = createTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           main: '#FF5733',
//         },
//         // ...other tokens
//       },
//     },
//     dark: {
//       palette: {
//         primary: {
//           main: '#E0C2FF',
//         },
//         // ...other tokens
//       },
//     },
//   },
// });

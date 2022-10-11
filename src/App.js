import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes'
import Create from './pages/Create'

//Default Theme
import { createTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
//theme we want to be the default (override default values)

import Layout from './Layout';


const theme = createTheme({
  palette: {
    primary: {
      main: "#3fa3a3"
      //Note loght and dark are specified automatically
    }
    ,
    //use color from color mui
    secondary: purple
  }
})
//to use this theme put return in themeprovider component


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />

          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

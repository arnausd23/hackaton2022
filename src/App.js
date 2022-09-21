import { ThemeProvider } from '@emotion/react';
import { Box, Grid } from '@mui/material';
import './App.css';
import { theme } from './Theme';

import { SearchBar } from './components/Searchbar';
import { Title } from './components/Title';
import { ProductCard } from './components/ProductCard';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const hanldeOnChange = (e) => { console.log(e.target.value); }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container margin="0 auto">
          <Grid item md={4} />
          <Grid item xs={12} md={5}>
            <Title />
          </Grid>
        </Grid>

        <Grid container margin="36px auto">
          <Grid item md={4} />
          <Grid item xs={12} md={7}>
            <SearchBar onSearchChange={hanldeOnChange}/>
          </Grid>
        </Grid>

        <Grid container margin="0 auto">
          <Grid item md={3} />
          <Grid item xs={12} md={4}>
            <ProductCard products={products}/>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider >
  );
}

export default App;

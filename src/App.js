import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import './App.css';
import { theme } from './Theme';

import { SearchBar } from './components/Searchbar';
import { Title } from './components/Title';
import { ProductCard } from './components/ProductCard';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState(['', ''])
  const hanldeOnChange = (e) => { console.log(e.target.value); }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        <Title />
        <SearchBar onSearchChange={hanldeOnChange} />
        <ProductCard products={products} />
      </Box>
    </ThemeProvider >
  );
}

export default App;

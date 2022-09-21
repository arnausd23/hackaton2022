import { ThemeProvider } from '@emotion/react';
import { Badge, Box, Chip, CircularProgress } from '@mui/material';
import './App.css';
import { theme } from './Theme';

import { SearchBar } from './components/Searchbar';
import { Title } from './components/Title';
import { ProductCard } from './components/ProductCard';
import { useState } from 'react';
import { API } from './api/api';
import DefaultCases from './components/DefaultCases';
import { Header } from './components/Header';
import { SimpleDialog } from './components/Dialog';
import Bg from './components/Bg';

function App() {
  const [category, setCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState(null)

  const onTextFieldChange = (e) => {
    setQuery(e.target.value)
  }

  const hanldeOnChange = (query) => {
    setQuery(query)
  }

  const submitQuery = async () => {
    console.log(query)
    setIsLoading(true)
    const response = await API.query(query)

    setCategory(response.label)
    setProducts(response.products)
    console.log(response)
    setIsLoading(false)

  }


  return (
    <ThemeProvider theme={theme}>
      <Header />

      {products.length === 0 && (<Bg />)}

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        {products.length === 0 && (<Bg />)}

        <Title isProductPageTitle={products.length === 0}/>
        <SearchBar
          value={query}
          isLoading={isLoading}
          onSubmit={submitQuery}
          onTextFieldChange={onTextFieldChange}
        />

        {products.length === 0 && (<DefaultCases onClickAtCase={(e) => {
          hanldeOnChange(e)
        }} />)}
        <ProductCard products={products} category={category} />
      </Box>

      <SimpleDialog isOpen={isLoading} />
    </ThemeProvider >
  );
}

export default App;

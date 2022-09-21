import styled from '@emotion/styled';
import { Alert, Box, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { blueColor } from '../Theme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
    padding: '24px',
    border: `1px solid ${blueColor}`,
    borderRadius: 0,
    boxShadow: '2px 2px 15px rgba(0, 46, 71, 0.1)',
}));

const Product = ({ name, description, logo, itemid, itemslug }) => {
    const navigateToProduct = () => {
        window.location.href = `https://capterra.com/p/${itemid}/${itemslug}`
    }

    return (
        <Item className='product-card'>
            <Box
                style={{
                    cursor: 'pointer'
                }}
                onClick={navigateToProduct}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        verticalAlign: 'center',
                        justifyContent: 'center',
                        height: "100px",
                        width: "100px",
                        border: `1px solid ${blueColor}`
                    }}>

                    <img
                        src={logo}
                        alt="Product image"
                        loading="lazy"
                    />
                </Box>
                <Box sx={{
                    textAlign: "left",
                    marginLeft: "20px",
                }}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </Box>
            </Box>
        </Item>
    )
}

export const ProductCard = ({ products, category }) => {
    return (
        <Box>
            {category && <Alert severity="info" sx={{ marginBottom: '24px', boxShadow: '2px 2px 15px rgba(0, 46, 71, 0.1)', }}>You are seing this results because we matched <strong>{category}</strong></Alert>}
            <Box sx={{ width: '100%', gridColumn: '2/3', gridRow: '3/3', display: 'flex' }}>
                <Stack spacing={2}>
                    {products.length > 0 && products.map(product => <Product logo={product.logo} itemid={product.itemid} itemslug={product.slug} name={product.name} description={product.description} />)}
                </Stack>
            </Box>
        </Box>
    )
}
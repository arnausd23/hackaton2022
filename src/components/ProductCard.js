import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { blueColor } from '../Theme';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
    padding: '24px',
}));

const Product = ({ name, description, logo, itemid, itemslug }) => {

    const navigateToProduct = () => {
        window.location.href = `https://capterra.com/p/${itemid}/${itemslug}`
    }

    return (
        <Item>
            <Box
                style={{
                    cursor: 'pointer'
                }}
                onClick={navigateToProduct}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <img
                    src={logo}
                    alt="Product image"
                    loading="lazy"
                    style={{
                        maxWidth: "100px",
                        height: "100%",
                        border: `1px solid ${blueColor}`
                    }}
                    />
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

export const ProductCard = ({ products }) => {

    return (
        <Box sx={{ width: '100%', gridColumn: '2/3', gridRow: '3/3', display: 'flex' }}>
            <Stack spacing={2}>
                {products.length > 0 && products.map(product => <Product logo={product.logo} itemid={product.itemid} itemslug={product.slug} name={product.name} description={product.description} />)}
            </Stack>
        </Box>
    )
}
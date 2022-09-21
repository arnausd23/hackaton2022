import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
    padding: '24px',
}));

const Product = ({data}) => {
    return (
        <Item>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <img
                    src={`https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80`}
                    alt=""
                    loading="lazy"
                    style={{
                        maxWidth: "100px",
                        height: "100%"
                    }}
                />
                <Box sx={{
                    textAlign: "left",
                    marginLeft: "20px"
                }}>
                    <a href=''>product Link</a>
                    <h3>Product title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in libero semper, vulputate felis ac, efficitur purus. Nunc maximus faucibus convallis. Ut vel purus et lectus suscipit maximus ut sit amet augue. Suspendisse sagittis justo consequat tristique commodo. Cras magna lacus, aliquet eu vehicula nec, vulputate id turpis. Nam augue ex, vulputate nec nisi a, auctor rutrum metus. Sed elementum quis sapien non mollis. Sed sodales enim eu justo fermentum, non imperdiet diam mattis. Quisque sollicitudin nulla at massa vulputate, id pharetra neque feugiat. In eros purus, dictum non dapibus eget, consequat id metus.</p>
                </Box>
            </Box>
        </Item>
    )
}

export const ProductCard = ({products}) => {

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                {products.length > 0 && products.map(product => <Product data={product}/>)}
            </Stack>
        </Box>
    )
}
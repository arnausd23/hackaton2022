import { Badge, Box, Chip, CircularProgress } from '@mui/material';

export default function Bg() {

    return (
      <>
      <div className="bg-color"></div>
        <Box
        
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}>
          <div className='bg-svg'>
          <img src='/bg.png' />
          </div>
          
          </Box>
        </>
    )

}
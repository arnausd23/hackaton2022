import { ListItemButton } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';


const someTexts = [
    'I run a church and I need to hire a priest',
    'I have an international team and we are looking to work closer'
]

export default function DefaultCases({onClickAtCase}) {
    return ( 
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
                {someTexts.map(text => (
                    <ListItem onClick={() => onClickAtCase(text)} disablePadding>
                        <ListItemButton>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem> 
                ))}
            </List>
        </Box>
    )
}
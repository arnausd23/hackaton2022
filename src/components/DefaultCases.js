import { ListItemButton } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import SearchIcon from './SearchIcon'

const someTexts = [
    'I need to monitor a project remotely',
    'I need to create a school portal administration for students',
    'I need a data compliant HR system to store the employees information',
    'I want a free solution for my SMB to support my customer service team',
]

export default function DefaultCases({onClickAtCase}) {
    return ( 
        <Box sx={{ width: '600px'}}>
            <div
                style={{
                    color: "#93B4D8",
                    fontFamily: 'Arial',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '32px',
                    marginBottom: 12,
                }}      
            >Popular questions</div>
            <List>
                {someTexts.map(text => (
                    <ListItem onClick={() => onClickAtCase(text)} disablePadding>
                        <ListItemButton
                            style={{
                                borderBottom: '1px solid #607480',
                                paddingBottom: '16px',
                            }}
                        >
                            <div
                                 style={{
                                    color: "#F2F8FB",
                                    fontSize: '16px',
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}
                            >
                                <div style={{ marginRight: 12}}><SearchIcon /></div> <div style={{ paddingTop: '4px'}}>{`"${text}"`}</div></div>
                        </ListItemButton>
                    </ListItem> 
                ))}
            </List>
        </Box>
    )
}
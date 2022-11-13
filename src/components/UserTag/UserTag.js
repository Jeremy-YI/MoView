import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth: 360,
  height: 250,
  bgcolor: '#e3e3e3',
  borderStyle: 'solid',
  fontSize: '1.5rem',
  justifyContent: 'center',
};

export default function UserTag() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary="some tag" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="another tag" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="one more tag" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="one more tag" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="last tag" />
      </ListItem>
    </List>
  );
}

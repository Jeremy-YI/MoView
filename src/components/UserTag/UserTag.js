import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const style = {
  width: '100%',
  maxWidth: 360,
  height: 250,
  bgcolor: '#e3e3e3',
  borderStyle: 'solid',
};

export default function UserTag(movie) {
  const navigate = useNavigate();
  const { id, name } = movie || {};
  const handleClick = () => {
    navigate(`../movie/${id}`, { replace: true });
  };

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem onClick={handleClick}>
        <ListItemText primary={name} />
      </ListItem>
      <Divider />
    </List>
  );
}

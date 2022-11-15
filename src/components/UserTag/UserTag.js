/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useEffect from 'react';
import { fetchAllTags, selectTag } from '../../redux/slices/tag';

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
  const dispatch = useDispatch();
  const tagList = useSelector(selectTag);
  useEffect(() => {
    dispatch(fetchAllTags());
  }, []);

  return (
    <>
      {tagList.map((tag) => (
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem key={tag.id}>
            <ListItemText primary={tag.name} />
          </ListItem>
          <Divider />
        </List>
      ))}
    </>
  );
}

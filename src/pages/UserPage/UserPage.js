import React from 'react';
import Grid from '@mui/material/Grid';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserTag from '../../components/UserTag/UserTag';
import Root from '../../layout/Root';

const Avatar = styled(MuiAvatar)({
  marginTop: '2em',
  marginLeft: '2em',
});

const Box = styled(MuiBox)({
  paddingTop: '4em',
  paddingLeft: '5em',
  marginBottom: '5em',
});

function UserPage() {
  return (
    <>
      <Root />
      <Box sx={{ flexGrow: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?fit=1200%2C675"
              sx={{ width: 150, height: 150 }}
            />
          </Grid>
          <Grid item xs={6}>
            <UserInfo />
          </Grid>
          <Grid item xs={3}>
            <UserTag />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UserPage;

import { Outlet, useNavigation } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import NavigationBar from '../components/NavigationBar/NavigationBar';

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state !== 'idle' && <LinearProgress />}
      <NavigationBar />
      <Outlet />
    </>
  );
}

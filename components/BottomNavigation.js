import * as React from 'react';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LoginIcon from '@mui/icons-material/Login';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0); 

  return (
        <Paper className='bottomNavigation' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,zIndex:100 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <div className='bottomNavigation__inner'>
          <Link href='#start1'>
                <BottomNavigationAction label="Ana Səhifə" icon={<HomeIcon />} className='bottomNavigation__item'/>
            </Link>
            <Link href='#kurslar'>
                <BottomNavigationAction label="Kurslar" icon={<MenuBookIcon />}  className='bottomNavigation__item'/>
            </Link>
            <Link href='#about'>
            <BottomNavigationAction label="Haqqımızda" icon={<InfoIcon />} className='bottomNavigation__item'/>
            </Link>
            <Link href='#contact'>
                <BottomNavigationAction label="Əlaqə" icon={<ConnectWithoutContactIcon />} className='bottomNavigation__item'/>
            </Link>
            <Link href='/soon'>
                <BottomNavigationAction label="Hesab" icon={<LoginIcon />} className='bottomNavigation__item'/>
            </Link>
          </div>
            
        </BottomNavigation>
      </Paper>
  );
}
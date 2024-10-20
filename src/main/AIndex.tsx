import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SliderPage from './components/SliderPage';
import Controller from './controller/Controller';

export interface typeDarkMode {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AIndex() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  const onClickToChange = (e) => {
    console.log('call back!', e);
    setIsDark(e);
  };

  return (
    <Box sx={{ height: '100%' ,
    display: 'flex',
    justifyContent: 'end',
    flexDirection: 'column'
    
    }}>
      <SliderPage></SliderPage>
      <Controller isDark={isDark} onClickToChange={onClickToChange}></Controller>
    </Box>
  );
}

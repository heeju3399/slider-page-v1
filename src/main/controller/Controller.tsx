import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import Box from '@mui/material/Box';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { revelations } from '../data/revelations.json';

interface typeRevelation {
  chapter: number;
  verses: {
    verse: number;
    text: string;
  }[];
}
[];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function ChangeChapterGrid() {
  console.log('ChangeChapterGrid pass');
  revelations.map((v: typeRevelation) => {
    // console.log("map", v.chapter)
    // console.log("map", v.verses)
    // v.verses.map((vv) => {
    //     console.log("ttttt", vv.text)
    // })
  });

  const list = [];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid size={8}>oksk</Grid>
        <Grid container size={16}>
          <Grid size={12}>
            <Item>nested size=12/24</Item>
          </Grid>
          <Grid size={12}>
            <Item>nested size=12/24</Item>
          </Grid>
        </Grid>
        <Grid size={8}>
          <Item>size=8/24</Item>
        </Grid>
        <Grid container columns={12} size={16}>
          <Grid size={6}>
            <Item>nested size=6/12</Item>
          </Grid>
          <Grid size={6}>
            <Item>nested size=6/12</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function Controller(props) {
  const { isDark, onClickToChange } = props;
  console.log('Controller pass ');
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    console.log('oksk', newValue);
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          justifyItems: 'center',
        }}
      >
        <Box sx={{ border: 1, borderRadius: 10, mb: 0.5 }}>
          <ConSetting
            isDark={isDark}
            onClickToChange={onClickToChange}
          ></ConSetting>
        </Box>

        <Box //silder box//
          sx={{
            flexGrow: 2,
            m: 0.5,
            mx: 3,
          }}
        >
          <Slider
            sx={{ color: isDark ? 'white' : 'black' }}
            value={value}
            min={0}
            step={5}
            max={100}
            onChange={handleChange}
            valueLabelDisplay="off"
            aria-labelledby="non-linear-slider"
          />
        </Box>
      </Box>
    </>
  );
}

////////////////////ConSetting////////////////////

type Anchor = 'top' | 'left' | 'bottom' | 'right';
let mode = 'light';
function ConSetting(props) {
  const { isDark, onClickToChange } = props;
  ///TODO: 모드변경시 콘트롤러 색상 변경
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      console.log('toggleDrawer pass');
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'end',
        }}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="theme-toggle"
            name="theme-toggle"
            row
            value={mode}
            onChange={(event) => {
              const value = event.target.value;
              mode = event.target.value;
              console.log('v', value);
              if (event.target.value == 'dark') {
                onClickToChange(true);
              } else if (event.target.value == 'light') {
                onClickToChange(false);
              }
            }}
          >
            <FormControlLabel value="light" control={<Radio />} label="Light" />
            <FormControlLabel value="dark" control={<Radio />} label="Dark" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />

      <List>
        {['보기', '시험1', '시험2', '시험3'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* json 파일에 있는 목록을 그대로 불러와서 뿌리면서 컴포넌트 만들기 */}
      <ChangeChapterGrid />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <Box sx={{}}>
      {(['bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="setting"
            size="large"
            onClick={toggleDrawer('bottom', true)}
            sx={{ color: isDark ? 'white' : 'black' }}
          >
            <SettingsIcon fontSize="inherit" />
          </IconButton>

          <SwipeableDrawer
            anchor={'bottom'}
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
            onOpen={toggleDrawer('bottom', true)}
          >
            {list('bottom')}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

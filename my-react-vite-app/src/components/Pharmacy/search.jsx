import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '1100px',
        height: '38px',
        float: 'left',
        position: 'relative',
        boxSizing: 'content-box',
        WebkitBoxFlex: 1,
        msFlex: 1,
        flex: 1,
        '@media(max-width: 767px)': {
          paddingLeft: '50px',
          paddingRight: '50px',
          width: '100%',
          boxSizing: 'border-box',
        },
        '@media(max-width: 320px)': {
          paddingRight: '50px',
        },
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          padding: '0 0 0 12px',
          height: '40px',
          WebkitBoxSizing: 'border-box',
          MozBoxSizing: 'border-box',
          boxSizing: 'border-box',
          fontSize: '14px',
          borderRadius: '3px',
          border: '#fff',
          position: 'relative',
          top: '0',
          MozBoxShadow: 'none',
          WebkitBoxShadow: 'none',
          boxShadow: 'none',
          '&:focus': {
            outline: '0',
          },
          '@media(max-width: 767px)': {
            fontSize: '14px',
          },
        }}
        placeholder="Search your medicine (e.g. napa)"
        inputProps={{ 'aria-label': 'Search for products (e.g. eggs, milk, potato)' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

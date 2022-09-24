import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchComponent(props) {
  return (
    <Paper
      component="form"
      onSubmit={props.onSubmit? props.onSubmit : (evt)=> {evt.preventDefault() }}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.placeholder}
        inputProps={{ 'aria-label': props.placeholder }}
        value={props.value}
        onInput={props.onInput}
      />
      <IconButton onClick={props.onSearch} type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

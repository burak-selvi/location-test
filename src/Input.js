import React from 'react'
import InputMask from 'react-input-mask';
import { TextField, FormControl, InputLabel, FilledInput, InputAdornment, OutlinedInput } from '@material-ui/core';
import {
  fade, makeStyles
} from '@material-ui/core/styles';

const useStylesReddit = makeStyles((theme) => {
  const defaultBorderColor = '#e2e2e1';
  const error = theme.palette.error.main;
  const isError = true;
  const color = isError ? theme.palette.error.main : defaultBorderColor;
  const focusedColor = isError ? theme.palette.error.main : theme.palette.primary.main;
  return {
    root: {
      border: `1px solid ${color}`,
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fff',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(focusedColor, 0.25)} 0 0 0 2px`,
        borderColor: focusedColor,
      },
    },
    focused: {},
  }
});

function RedditTextField(props) {
  const classes = useStylesReddit();

  return <TextField InputProps={{ classes, disableUnderline: true, startAdornment: <InputAdornment position="start">+90</InputAdornment> }} {...props} />;
}

export default function Input(props) {
  const classes = useStyles();
  return (
    <div>

      <div style={{ height: '50px' }}></div>
      <InputMask className={classes.margin} mask="999 999 99 99" maskChar={null} value={props.value} onChange={props.onChange}>
        {(inputProps) => <RedditTextField error={true} label="Cep Telefonu"
          {...inputProps}
          variant="filled"
          id="reddit-input" />}
      </InputMask>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
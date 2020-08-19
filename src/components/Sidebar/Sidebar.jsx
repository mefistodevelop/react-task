import React from 'react';
import './Sidebar.scss';
import { Avatar } from '@material-ui/core';
import { Navigation } from './Navigation/Navigation';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    '@media (max-width: 768px)': {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  },
}));

export function Sidebar() {
  const link =
    'https://vignette.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg/revision/latest?cb=20190623020017';
  const classes = useStyles();

  return (
    <div className="sidebar">
      <div className="sidebar__avatar">
        <Avatar src={link} alt="user's avatar" className={classes.large} />
      </div>
      <Navigation />
      <footer className="sidebar__footer">&copy; Copyright 2020</footer>
    </div>
  );
}

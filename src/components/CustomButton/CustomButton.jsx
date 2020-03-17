import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'max-content',
    whiteSpace: 'nowrap',
  },
  small: {
    height: 32,
    marginTop: 15,
    background: '#999',
    color: '#fff',
    fontWeight: 500,
  },
  medium: {
    height: 46,
    marginTop: 15,
    background: 'rgba(0, 0, 0, 0)',
    border: '2px solid #333',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
}));

export default function CustomBadge(props) {
  const classes = useStyles();
  const {
    content, size = 'medium', onClick, type, variant, className,
  } = props;

  const buttonClassName = clsx(classes.button, {
    [classes.large]: size === 'large',
    [classes.medium]: size === 'medium',
  }, className);

  return (
    <Button
      className={buttonClassName}
      onClick={onClick}
      type={type}
      variant={variant}
    >
      {content}
    </Button>
  );
}

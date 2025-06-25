import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>

        {/* App Title or Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gabriel Que
        </Typography>

        {/* Navigation Links */}
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

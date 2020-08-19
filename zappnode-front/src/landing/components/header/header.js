import React from 'react';
import Navigation from './navigation';
import Content from './content';

const Header = (props) => {
  return (
    <header className="bg-primary mat-n mb-0 pt-7">
      <Navigation change={props.change} />
      <Content />
    </header>
  );
};
export default Header;

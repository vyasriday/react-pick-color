import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import './Drawer.css';

const Drawer = ({ drawerColor }) => {
  return (
    <section className="drawer" style={{ backgroundColor: drawerColor }}>
      <CanvasDraw
        style={{ width: '100%', height: '80%' }}
        brushColor={drawerColor}
        brushRadius={8}
      />
    </section>
  );
};

export default Drawer;

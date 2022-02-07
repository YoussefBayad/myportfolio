import React from 'react';
import RcDrawer from 'rc-drawer';

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  DrawerBox,
  Close,
  ...props
}) {
  return (
    <>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        duration={'0.4s'}
        {...props}>
        {Close && <Close onClick={toggleHandler}>{closeButton}</Close>}
        <DrawerBox>{children} </DrawerBox>
      </RcDrawer>
      <div style={{ display: 'inline-block' }} onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </>
  );
}

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};

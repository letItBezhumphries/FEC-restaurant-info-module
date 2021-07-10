import React from 'react';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a 
    href=""
    ref={ref}
    className="mid-bar-breadcrumb-link"
    onClick={(e) => {
      e.preventDefault();
      onClick(e)
    }}>
      {children}
    </a>
));

export default CustomToggle;
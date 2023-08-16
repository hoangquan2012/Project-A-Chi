import React from 'react';
import { Outlet } from "react-router-dom";

function ContentLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ContentLayout;

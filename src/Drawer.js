import React, { Component, useEffect, useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

export default function Drawer(props) {
  const { handleClose, title, direction, children } = props;
  let node = null;

  const drawerSideClass = cx("drawer", {
    drawerLeft: direction === "left",
    drawerRight: direction === "right",
    drawerUp: direction === "up",
    drawerDown: direction === "down"
  });

  function handleOutsideClick(e) {
    if (node.contains(e.target)) {
      return;
    }
    handleClose();
  }

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, false);
    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  });

  return (
    <div className="drawer-wrapper">
      <div className={drawerSideClass} ref={nodeRef => (node = nodeRef)}>
        <div className="drawer-header">
          <div className="drawer-close-icon" onClick={handleClose} />
          <div className="drawer-title">{title}</div>
        </div>
        <div className="drawer-content">{children}</div>
      </div>
    </div>
  );
}

export function useDrawer() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return {
    open,
    handleOpen,
    handleClose
  };
}

Drawer.propTypes = {
  handleClose: PropTypes.func,
  title: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.node
};

Drawer.defaultProps = {
  direction: "right",
  title: "Drawer Header"
};

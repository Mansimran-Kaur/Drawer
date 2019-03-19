import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import "./styles.css";

class Drawer extends Component {
  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      debugger;
      return;
    }
    this.props.handleClose();
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  render() {
    const { handleClose, title, direction, children } = this.props;

    const drawerSideClass = cx("drawer", {
      drawerLeft: direction === "left",
      drawerRight: direction === "right",
      drawerUp: direction === "up",
      drawerDown: direction === "down"
    });

    return (
      <div className="drawer-wrapper">
        <div className={drawerSideClass} ref={node => (this.node = node)}>
          <div className="drawer-header">
            <div className="drawer-close-icon" onClick={handleClose} />
            <div className="drawer-title">{title}</div>
          </div>
          <div className="drawer-content">{children}</div>
        </div>
      </div>
    );
  }
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

export default Drawer;

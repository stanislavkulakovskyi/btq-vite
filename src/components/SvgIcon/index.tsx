import React from "react";
import PropTypes from "prop-types";

import logoBlack from "../../assets/icons/btq-logo-black.svg";
import logoWhite from "../../assets/icons/btq-logo-white.svg";

function SvgIcon({ type, className, onClick }) {
  const SVG_BY_TYPE = {
    logoBlack,
    logoWhite
  };

  return <img src={SVG_BY_TYPE[type]} className={className} onClick={onClick} />;
}

SvgIcon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SvgIcon.defaultProps = {
  className: "",
  onClick: () => {},
};

export default SvgIcon;

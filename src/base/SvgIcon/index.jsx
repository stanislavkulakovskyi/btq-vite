import PropTypes from "prop-types";

// base
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";

const BASE = {
  plus: Plus,
};

const SVG_BY_TYPE = {
  ...BASE,
};

function SvgIcon({ type, className, ...rest }) {
  const CustomSvg = SVG_BY_TYPE[type] || "svg";

  return <CustomSvg className={className} {...rest} />;
}

SvgIcon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

SvgIcon.defaultProps = {
  type: "",
  className: "",
};

export default SvgIcon;

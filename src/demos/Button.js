import PropTypes from "prop-types";
import "./styles/Buttons.css";
import { IconContext } from "react-icons";

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--success--solid",
  "btn--danger--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--success--outline",
  "btn--danger--outline",
];

const SIZES = ["btn--medium", "btn--small"];

export function Button({ icon, text, type, onClick, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
   
   <>
      <IconContext.Provider
        value={{ color: "white"}}
      >
        
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {icon}
          {text}
        </button>{" "}
      </IconContext.Provider>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
Button.defaultProps = {
  text: "Aceptar",
};

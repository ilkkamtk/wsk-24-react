import PropTypes from 'prop-types';

const Button = ({text, className, ...props}) => {
  return (
    <button
      {...props}
      className={`m-3 mt-0 rounded-lg bg-stone-500 p-3 text-stone-100 ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;

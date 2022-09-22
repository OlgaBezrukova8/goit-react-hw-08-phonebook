import PropTypes from 'prop-types';

export const WelcomeContainer = ({ header, text }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};

WelcomeContainer.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

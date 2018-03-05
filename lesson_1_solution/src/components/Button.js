import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

function Button(props) {
  const {
    className,
    ...rest
  } = props;

  const classes = classNames(
    className,
    'button',
  );

  return (
    <button {...rest} className={classes} />
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;

import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, normal, primary, outline, rounded, disabled, className, onClick, children, ...passProps }) {
  let Comp = 'button';

  const props = {
    disabled,
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    normal,
    primary,
    outline,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  normal: PropTypes.bool,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
export default Button;

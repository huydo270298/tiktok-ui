import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary, outline, rounded, disabled, className, onClick, children, ...passProps }) {
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

export default Button;

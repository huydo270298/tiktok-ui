import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button to={data.to} className={classes} onClick={onClick}>
      {data.icon_src && <img src={data.icon_src} alt="" />}
      {data.title}
    </Button>
  );
}

export default MenuItem;

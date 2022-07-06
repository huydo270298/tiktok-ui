import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
  return (
    <Button to={data.to} className={cx('menu-item')}>
      <img src={data.icon_src} alt="" />
      {data.title}
    </Button>
  );
}

export default MenuItem;

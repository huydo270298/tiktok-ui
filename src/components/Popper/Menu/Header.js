import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <img src={images.icon_back} alt="" />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
}

export default Header;

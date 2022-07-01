import React from 'react';
import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck="false" />
          <button className={cx('clear')}>
            <i className={cx('icon-reset')}>
              <img src={images.icon_search_reset} alt="" />
            </i>
            {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
          </button>
          {/*  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
          <span className={cx('bar')}></span>
          <button className={cx('search-btn')}>
            <i className={cx('icon-search')}>
              <img src={images.icon_search} alt="" />
            </i>
          </button>
        </div>
        <div className={cx('acion')}></div>
      </div>
    </header>
  );
}

export default Header;

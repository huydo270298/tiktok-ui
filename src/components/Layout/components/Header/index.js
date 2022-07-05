import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Tìm kiếm tài khoản và video" spellCheck="false" />
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
        </Tippy>
        <div className={cx('action')}>
          <Button to="/upload">
            <img src={images.icon_add} className={cx('icon-add')} alt="" />
            Tải lên
          </Button>
          <Button primary>Đăng nhập</Button>
          <Button primary rounded className={cx('custom')}>
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

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
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon_src: images.icon_lang,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn ngữ',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon_src: images.icon_question,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon_src: images.icon_keyboard,
    title: 'Phím tắt trên bàn phím',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} className={cx('logo')} alt="Tiktok" />
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
          <Button normal to="/upload">
            <img src={images.icon_add} className={cx('icon-add')} alt="" />
            Tải lên
          </Button>
          <Button primary>Đăng nhập</Button>
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('btn-more')}>
              <img src={images.icon_more} alt="" />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

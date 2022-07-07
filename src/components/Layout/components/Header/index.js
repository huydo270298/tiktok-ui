import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { AddIcon, MailIcon, MesIcon, ResetSearchIcon, SearchIcon } from '~/components/Icons';
import Image from '~/components/Image';

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

const userMenu = [
  {
    icon_src: images.icon_profile,
    title: 'Xem hồ sơ',
    to: '/profile',
  },
  {
    icon_src: images.icon_coin,
    title: 'Nhận xu',
    to: '/coin',
  },
  {
    icon_src: images.icon_setting,
    title: 'Cài đặt',
    to: '/setting',
  },
  ...MENU_ITEMS,
  {
    icon_src: images.icon_out,
    title: 'Đăng xuất',
    to: '/logout',
    separate: true,
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

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} className={cx('logo')} alt="Tiktok" />
        <HeadlessTippy
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
              <ResetSearchIcon />
            </button>
            <span className={cx('bar')}></span>
            <button className={cx('search-btn')}>
              <SearchIcon className={cx('icon-search')} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('action')}>
          <Button normal to="/upload">
            <AddIcon />
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Tin nhắn" delay={[0, 0]}>
                <button className={cx('action-btn')}>
                  <MesIcon className={cx('icon-mes')} />
                </button>
              </Tippy>
              <Tippy content="Hộp thư" delay={[0, 0]}>
                <button className={cx('action-btn')}>
                  <MailIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7e2ecb5db8a905abccfa9a2a30b16c3b~c5_100x100.jpeg?x-expires=1657339200&x-signature=F38jzRcFizOk%2FFLTJAYmRl8uICU%3D"
                className={cx('user-avatar')}
                alt="nguyenvana"
              />
            ) : (
              <button className={cx('btn-more')}>
                <img src={images.icon_more} alt="" />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

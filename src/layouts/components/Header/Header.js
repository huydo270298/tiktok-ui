import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { AddIcon, MailIcon, MesIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';

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
  // handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const currentUser = false;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} className={cx('logo')} alt="Tiktok" />
        </Link>
        <Search />
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
                src="https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/4909c3fc0d2db92205c93218874063ab~c5_100x100.jpeg?x-expires=1657850400&x-signature=fH8ot275%2BdtXSLkMCCbERu%2FpVfQ%3D"
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

import classNames from 'classnames/bind';
import { GroupActiveIcon, GroupIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="Dành cho bạn"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        ></MenuItem>
        <MenuItem
          title="Đang Follow"
          to={config.routes.following}
          icon={<GroupIcon />}
          activeIcon={<GroupActiveIcon />}
        ></MenuItem>
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />}></MenuItem>
      </Menu>
    </aside>
  );
}

export default SideBar;

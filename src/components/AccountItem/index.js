import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/02cda9089360645c1b1c60e1c186cc68.jpeg?x-expires=1657850400&x-signature=Xm6QXVeOreZNeintCKUEvuqfRUw%3D"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Nguyen Van A
          <img src={images.icon_check} className={cx('icon-check')} alt="" />
        </h4>
        <p className={cx('username')}>nguyenvana</p>
      </div>
    </div>
  );
}

export default AccountItem;

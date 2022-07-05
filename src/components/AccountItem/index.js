import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1657173600&x-signature=aIGHgDxe8NXk1vTQ5rhxybk6r1k%3D"
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

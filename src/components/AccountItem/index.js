import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          {data.full_name}
          {data.tick && <img src={images.icon_check} className={cx('icon-check')} alt="" />}
        </h4>
        <p className={cx('username')}>{data.nickname}</p>
      </div>
    </Link>
  );
}

export default AccountItem;

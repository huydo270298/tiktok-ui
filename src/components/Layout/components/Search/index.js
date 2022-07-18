import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import request from '~/utils/request';
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { LoadingSearchIcon, ResetSearchIcon, SearchIcon } from '~/components/Icons';
import { useDebounced } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debounced = useDebounced(searchValue, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    setLoading(true);

    request
      .get('users/search', {
        params: {
          q: debounced,
          type: 'less',
        },
      })

      .then((res) => {
        setSearchResult(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) setSearchValue(searchValue);
  };

  return (
    <HeadlessTippy
      appendTo={document.body}
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={() => setShowResult(false)}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck="false"
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <ResetSearchIcon />
          </button>
        )}

        {loading && (
          <button className={cx('loading')}>
            <LoadingSearchIcon />
          </button>
        )}

        <span className={cx('bar')}></span>
        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon className={cx('icon-search')} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

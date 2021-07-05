import React from 'react';
import { createUseStyles } from 'react-jss'
import ShortSelector from './ShortSelector';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 12px'
  },
  logo: {
    width: 30,
    marginRight: 10
  },
  text: {
    margin: 0
  },
  url: {
    paddingLeft: 20
  },
  toggle: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  }
});

const Header = (props) => {
  const cls = useStyles();
  const { fiatOptions, selectedFiat, onFiatChange } = props;
  const githubUrl = "https://github.com/asyraffff/coingacko";

  return (
    <header className={cls.header}>
      <h1 className={cls.text}>CoinGacko</h1>
        <h1 className={cls.text}>🦖</h1>
        <p className={cls.url}>Written by <a href={githubUrl}>@asyraf</a></p>
      <ShortSelector
        className={cls.toggle}
        options={fiatOptions}
        value={selectedFiat}
        onChange={onFiatChange}
      />
    </header>
  );
}

export default Header;

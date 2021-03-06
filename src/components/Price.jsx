import React from 'react';
import { createUseStyles } from 'react-jss';
import { price, marketCap } from '../lib/formatter';

const useStyles = createUseStyles({
  price: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 'normal',
  }
});

const Price = (props) => {
  const cls = useStyles();
  const { value, fiat, short, className } = props;

  return (
    <div className={`${cls.price} ${className}`}>
      {fiat === 'myr' ? 'RM' : '$'}
      {short ? marketCap(value) : price(value)}
    </div>
  );
}

export default Price;

import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);

  // 객체 구조 분해 할당
  const { items } = cartCtx;

  // curNumber = 현재 수량
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      // 장바구니에 항목이 없다면 그냥 리턴
      return;
    }
    setBtnAnimation(true);
    // 애니메이션 클래스 제거
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    // 클린업 함수(타이머 제거)
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

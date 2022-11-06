import React from 'react';
import classes from './MealsSummary.module.css';

// MealsSummary = 음식 요약
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 배달해드려요!</h2>
      <p>다양한 음식이 준비되어 있습니다! 오늘은 어떤 음식으로 하시겠어요?</p>
      <p>
        모든 음식은 베테랑 요리사들이 높은 품질과 신선한 재료로 요리하고 제공해
        드린답니다!
      </p>
    </section>
  );
};

export default MealsSummary;

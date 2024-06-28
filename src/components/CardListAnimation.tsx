'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

type CardListAnimationProps = {
  children: React.ReactNode;
  card: {
    width: number;
    gap: number;
  };
  mobileCard?: {
    width: number;
    gap: number;
  };
  count: number;
  duration: number;
};

export const CardListAnimation = ({ children, card, mobileCard = card, count, duration }: CardListAnimationProps) => {
  const controls = useAnimation();

  const [cardWidth, setCardWidth] = useState(card.width); // 기본값을 420으로 설정
  const [gap, setGap] = useState(card.gap);

  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth <= 640 ? mobileCard.width : card.width;
      const gap = window.innerWidth <= 640 ? mobileCard.gap : card.gap;
      setCardWidth(width);
      setGap(gap);
    };

    updateCardWidth();

    window.addEventListener('resize', updateCardWidth);

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  useEffect(() => {
    const cycleAnimation = async () => {
      await controls.start({
        x: [0, -((cardWidth + gap) * count)],
        transition: {
          duration: count * duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    };

    cycleAnimation();
  }, [controls, cardWidth, gap, count, duration]);

  return (
    <motion.div className={`flex`} animate={controls} style={{ gap: `${gap}px` }}>
      {children}
    </motion.div>
  );
};

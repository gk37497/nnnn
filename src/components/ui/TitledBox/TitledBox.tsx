import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import React from 'react';

import { Text } from '../Text';
import s from './TitledBox.module.css';

type Props = { title: string; children: ReactNode; className?: string };

export const TitledBox: FC<Props> = ({ title, children, className }) => {
  return (
    <div className={clsx(s.root, { className })}>
      <Text variant="sectionHeading">{title}</Text>
      <div className={s.child}>{children}</div>
    </div>
  );
};

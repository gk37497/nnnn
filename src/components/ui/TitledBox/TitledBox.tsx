import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import React from 'react';

import s from './TitledBox.module.css';

type Props = { title: string; children: ReactNode; className?: string };

export const TitledBox: FC<Props> = ({ title, children, className }) => {
  return (
    <div className={clsx(s.root, { className })}>
      <h3 className="mb-4 text-3xl font-medium lg:text-4xl">{title}</h3>
      <div className={s.child}>{children}</div>
    </div>
  );
};

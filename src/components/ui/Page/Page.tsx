import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import * as React from 'react';

import { Text } from '../Text';
import s from './Page.module.css';

export type PageProps = {
  children: React.ReactNode;
  heading?: string;
  className?: string;
  title?: string;
};

const Page: React.FC<PageProps> = ({ children, className, title }) => {
  return (
    <>
      <NextSeo title={`${title} ▮ Nnnn`} />
      <div className={clsx(s.root, className)}>
        <Text variant="heading">{title}</Text>
        <div className="pt-[44px]">{children}</div>
      </div>
    </>
  );
};

export default Page;

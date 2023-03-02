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
  titleHidden?: boolean;
};

const Page: React.FC<PageProps> = ({
  children,
  className,
  title,
  titleHidden = false,
}) => {
  return (
    <>
      <NextSeo title={`${title} ▮ Nnnn`} />
      <div className={clsx(s.root, className)}>
        {!titleHidden && (
          <Text className="absolute left-5 top-0">
            <h2 className="mr-5 max-w-[280px] pt-3 sm:max-w-none">{title}</h2>
          </Text>
        )}
        <div className="pt-[44px]">{children}</div>
      </div>
    </>
  );
};

export default Page;

import Link from 'next/link';
import React from 'react';

import { ArrowRight } from '@/components/icons';

export function Anchor({ text, url }: { text?: string; url: string }) {
  return (
    <div>
      <Link href={url}>
        <span className="flex flex-row items-center space-x-5 text-secondary-2">
          <h5 className="text-start text-xl font-bold">{text}</h5>
          <ArrowRight className="h-7 w-7" />
        </span>
      </Link>
    </div>
  );
}

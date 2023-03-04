import Link from 'next/link';

import Layout from '@/components/common/Layout';
import type ICONS from '@/components/icons/social-icons';
import { Icon } from '@/components/ui/Icon';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

type ItemProps = {
  icon: keyof typeof ICONS;
  text: string;
  link: string;
};

const socialLinks: ItemProps[] = [
  {
    text: 'gk37497@gmail.com',
    icon: 'email',
    link: 'mailto:gk37497@gmail.com',
  },
  {
    text: '/gk37497',
    icon: 'github',
    link: 'https://github.com/gk37497',
  },
  {
    text: 'namsrai_____ts',
    icon: 'instagram',
    link: 'https://www.instagram.com/namsrai____ts/',
  },
  {
    text: 'Namsraijamts Tserennadmid',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/namsraijamts-tserennadmid-7b34721a2',
  },
  {
    text: 'nnnn37497',
    icon: 'discord',
    link: 'https://discordapp.com/users/798134140696395816',
  },
];

export default function Index() {
  return (
    <Page title="Find me on">
      <ul className="space-y-3">
        {socialLinks.map((e) => (
          <Link key={e.text} href={e.link} target="_blank">
            <li className="flex w-full flex-row items-center gap-3">
              <Icon name={e.icon} size={50} className="mb-4" />
              <Text className="w-full">
                <h5 className="text-start">{e.text}</h5>
              </Text>
            </li>
          </Link>
        ))}
      </ul>
    </Page>
  );
}

Index.Layout = Layout;

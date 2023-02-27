import Layout from '@/components/common/Layout';
import type ICONS from '@/components/icons/social-icons';
import { Icon } from '@/components/ui/Icon';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

type ItemProps = {
  icon: keyof typeof ICONS;
  text: string;
};

const socialLinks: ItemProps[] = [
  {
    text: 'gk37497@gmail.com',
    icon: 'email',
  },
  {
    text: '/gk37497',
    icon: 'github',
  },
  {
    text: 'namsrai.ts',
    icon: 'instagram',
  },
  {
    text: 'Namsraijamts Tserennadmid',
    icon: 'linkedin',
  },
  {
    text: 'nnnn37497',
    icon: 'discord',
  },
];

export default function Index() {
  return (
    <Page title="Find me on">
      <ul className="space-y-3">
        {socialLinks.map((e) => (
          <li key={e.text} className="flex w-full flex-row items-center gap-3">
            <Icon name={e.icon} size={50} className="mb-4" />
            <Text className="w-full">
              <h5 className="text-start">{e.text}</h5>
            </Text>
          </li>
        ))}
      </ul>
    </Page>
  );
}

Index.Layout = Layout;

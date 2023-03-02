import Layout from '@/components/common/Layout';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';
import { TitledBox } from '@/components/ui/TitledBox';

function CareerItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="border-b border-b-accent-2 py-4">
      <Text>
        <p className="font-bold">{title}</p>
      </Text>
      <p className="-mt-2 text-accent-5">{description}</p>
    </li>
  );
}

export default function Index() {
  return (
    <Page title="Hey">
      <div>
        <Text>
          My name is Namsraijamts. I was born and raised in Ulaanbaatar
          (Mongolia). I love trying modern technologies and learning new things.
        </Text>
        <TitledBox title="What i do">
          I enjoy building applications to solve problems. My front-end
          framework of choice is React (Next.js). In the last few years, I have
          primarily written JavaScript and Typescript.
        </TitledBox>
        <TitledBox title="Career">
          <ul>
            <CareerItem
              title="Frontend Developer"
              description="Phronesis Enterprises Sep 2022 - present, Ulaanbaatar (Mongolia)"
            />
            <CareerItem
              title="Mobile and Web Developer"
              description="MongolId Jun 2021 - present, Ulaanbaatar (Mongolia)"
            />
          </ul>
        </TitledBox>
        <TitledBox title="What Else?">
          In my spare time I enjoy taking photos and listening good musics.
        </TitledBox>
      </div>
    </Page>
  );
}

Index.Layout = Layout;

import Layout from '@/components/common/Layout';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';
import { TitledBox } from '@/components/ui/TitledBox';

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
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
          </ul>
        </TitledBox>
        <TitledBox title="What Else?">
          Occaecat sit pariatur tempor et excepteur incididunt sit ad.
        </TitledBox>
      </div>
    </Page>
  );
}

Index.Layout = Layout;

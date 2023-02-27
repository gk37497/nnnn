import Layout from '@/components/common/Layout';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';
import { TitledBox } from '@/components/ui/TitledBox';

export default function Index() {
  return (
    <Page>
      <div className="space-y-5">
        <Text className="space-y-0">
          <h1>Tserennadmid Namsraijamts</h1>
          <h3 className="text-accent-4">Frontend Developer</h3>
        </Text>
        <Text>
          My name is Namsraijamts. I was born and raised in Ulaanbaatar
          (Mongolia). I have more than 2 years of experience in Web development.
          I love trying modern technologies and learning new things. And I enjoy
          configuring CI/CD, to improve the development experience.
        </Text>

        <TitledBox title="Skills">
          <ul className="list-inside list-disc">
            <li>aaa</li>
            <li>bbb</li>
            <li>ccc</li>
          </ul>
        </TitledBox>
        <TitledBox title="Experiences">
          <ul className="list-inside list-disc">
            <li>aaa</li>
            <li>bbb</li>
          </ul>
        </TitledBox>
        <TitledBox title="Educations">
          <Text>
            B.S. in National University of Mongolia, Ulaanbaatar (2018 - 2022)
            <p className="text-accent-4">Major in Computer Science</p>
          </Text>
        </TitledBox>
      </div>
    </Page>
  );
}

Index.Layout = Layout;

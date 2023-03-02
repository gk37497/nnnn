import Layout from '@/components/common/Layout';
import { Anchor } from '@/components/ui/Anchor';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

export default function Index() {
  return (
    <Page title="Hello, I'm Namsrai">
      <div className="flex flex-col space-y-5 md:flex-row">
        <div className="w-full space-y-5">
          <Text variant="large">
            I am a front-end developer, living in Ulaanbaatar (Mongolia). I love
            trying modern technologies and learning new things.
          </Text>
          <Text variant="large">
            And in my spare time, I enjoy taking photos and listening good
            music.
          </Text>
          <Anchor text="More about me ..." url="/about" />
        </div>
        <div className="w-full pt-5">
          <img
            src="/me.png"
            alt="mex"
            className="h-full w-full scale-95 rounded-lg object-cover"
          />
        </div>
      </div>
    </Page>
  );
}

Index.Layout = Layout;

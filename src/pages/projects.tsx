import Layout from '@/components/common/Layout';
import { Anchor } from '@/components/ui/Anchor';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

export default function Index() {
  return (
    <Page title="Things I've done">
      <div className="flex flex-wrap">
        {[1, 2, 3, 4].map((e) => (
          <div className="w-full p-2 sm:w-1/2" key={e}>
            <div className="h-32 rounded-lg bg-toast p-5">
              <Anchor text="Aaa" url="#" />
              <Text>
                <p className="text-accent-4">
                  Sit proident incididunt laboris qui.
                </p>
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

Index.Layout = Layout;

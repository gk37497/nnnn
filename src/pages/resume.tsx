import Layout from "@/components/common/Layout";
import { Page } from "@/components/ui/Page";
import { Text } from "@/components/ui/Text";
import { TitledBox } from "@/components/ui/TitledBox";

function SkillItem({ title, content }: { title: string; content: string }) {
  return (
    <li className="flex items-center border-b border-accent-2 pt-4">
      <Text className="w-full">
        <p className="font-extrabold">{title}</p>
      </Text>
      <Text className="w-full">
        <p className="text-accent-4">{content}</p>
      </Text>
    </li>
  );
}

type ExperienceItemProps = {
  title: string;
  company: string;
  time: string;
  companyLink: string;
  items: string[];
};

function ExperienceItem({ time, title, company, items }: ExperienceItemProps) {
  return (
    <li className="border-t border-t-accent-2 py-5">
      <div className="flex w-fit items-center justify-start">
        <Text>
          <p className="font-bold">{title}</p>
        </Text>
        <p className="mx-2 mb-4">-</p>
        <Text>
          <p className="font-extrabold">{company}</p>
        </Text>
      </div>
      <Text>
        <p className="-mt-4 text-accent-4">{time}</p>
      </Text>
      <ul className="list-inside list-disc text-accent-4">
        {items.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </li>
  );
}

export default function Index() {
  return (
    <Page title="Resume" titleHidden>
      <div className="space-y-5">
        <Text className="space-y-0">
          <h1>Tserennadmid Namsraijamts</h1>
          <h3 className="text-accent-4">Full-Stack Developer</h3>
        </Text>
        <Text>
          My name is Namsraijamts. Hailing from Ulaanbaatar, Mongolia, I bring
          over 2.5 years of expertise in both web and mobile application
          development. I have a passion for exploring cutting-edge technologies
          and am always eager to expand my knowledge.
        </Text>

        <TitledBox title="Skills">
          <ul>
            <SkillItem
              title="Programming Languages"
              content="JavaScript, TypeScript, Java ,Dart"
            />
            <SkillItem
              title="Libs and Frameworks"
              content="ReactJS, React Native, NextJS, Java Spring Boot, Flutter, NodeJS"
            />
            <SkillItem title="Databases" content="PostgreSQL, MongoDB" />
            <SkillItem title="VCS" content="git" />
            <SkillItem
              title="Editors"
              content="Intellij IDEA, VsCode, DataGrip"
            />
          </ul>
        </TitledBox>
        <TitledBox title="Experiences">
          <ul>
            <ExperienceItem
              company="Ondo LLC"
              companyLink="https://ondo.mn/"
              time="April 2023 - present"
              title="Front-End Developer"
              items={[
                "Built web app with NextJS",
                "Built admin dashboard with NextJS",
                "Worked on react-native and flutter based mobile app",
                "Used NextJS, Material UI and Tailwind for development",
              ]}
            />

            <ExperienceItem
              company="Mongol Id"
              companyLink="https://www.mid.mn/"
              time="July 2021 - April 2023"
              title="Full-Stack Developer"
              items={[
                "Worked on react-native based mobile app",
                "Built web app with NextJS",
                "Built admin dashboard with NextJS",
                "Built admin dashboard API with Java Spring Boot",
                "Used NextJS, Java Spring Boot and tailwind for development",
              ]}
            />

            <ExperienceItem
              company="Phronesis"
              companyLink="https://www.phronesis.mn/"
              time="Sep 2022 - May 2023"
              title="Full-Stack Developer"
              items={[
                "Built web app with NextJS",
                "Built e-commerce web app with NextJS and NodeJS",
                "Built admin dashboard with NextJS",
                "Used NextJS, NodeJS, RadixUI and tailwind for development",
              ]}
            />
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

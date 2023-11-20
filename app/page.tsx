import IntroHeader from "@/src/shared/components/IntroHeader";
import IntroContent from "../src/shared/components/IntroContent";
import Layout from "@/src/shared/components/Layout";
import CharacterPic from "@/src/shared/components/CharacterPic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="intro-page">
        <Layout>
          <IntroHeader></IntroHeader>
          <CharacterPic></CharacterPic>
          <IntroContent></IntroContent>
        </Layout>
      </div>
    </main>
  );
}

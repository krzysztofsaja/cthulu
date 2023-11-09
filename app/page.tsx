import IntroHeader from "@/src/shared/components/IntroHeader";
import IntroContent from "../src/shared/components/IntroContent";
import TopBar from "../src/shared/components/TopBar";
import Layout from "@/src/shared/components/Layout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="intro-page">
        <Layout>
          <TopBar></TopBar>
          <IntroHeader></IntroHeader>
          <IntroContent></IntroContent>
        </Layout>
      </div>
    </main>
  );
}

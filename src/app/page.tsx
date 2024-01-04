import IntroHeader from "@/src/shared/components/IntroHeader";
import Layout from "@/src/shared/components/Layout";
import IntroContent from "../shared/components/IntroContent";
import { getAuth, signOut } from "firebase/auth";

export default function Home() {
  const auth = getAuth();

  return (
    <Layout>
      <IntroHeader></IntroHeader>
      <button onClick={() => signOut(auth)}>Sing out of Firebase</button>
      <IntroContent></IntroContent>
    </Layout>
  );
}

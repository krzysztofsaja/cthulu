import BackstoryCard from "@/src/shared/components/BackstoryCard";
import Layout from "@/src/shared/components/Layout";
function BackstoryScreen() {
  return (
    <Layout>
        <div className="h-5/6 space-y-6 overflow-y-auto no-scrollbar">
          <BackstoryCard text="Personal description"></BackstoryCard>
          <BackstoryCard text="Ideology & Beliefs"></BackstoryCard>
          <BackstoryCard text="Significant People"></BackstoryCard>
          <BackstoryCard text="Meaningful Locations"></BackstoryCard>
          <BackstoryCard text="Treasured Possessions"></BackstoryCard>
          <BackstoryCard text="Traits"></BackstoryCard>
          <BackstoryCard text="Phobias & Manias"></BackstoryCard>
          <BackstoryCard text="Encounters with Mythos"></BackstoryCard>
        </div>
    </Layout>
  );
}

export default BackstoryScreen;

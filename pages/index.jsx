import BannerComponent from "../components/Banner/BannerComponent";
import CardSectionCompont from "../components/CardSection/CardSectionCompont";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import Layout from "../components/Layout/Layout";
import ProfileCardComponent from "../components/ProfileCard/ProfileCardComponent";

export default function Home() {
  return (
    <>
      <Layout>
        <BannerComponent />
        <HeroComponent />
        <ProfileCardComponent />
        <CardSectionCompont />
      </Layout>
    </>
  );
}

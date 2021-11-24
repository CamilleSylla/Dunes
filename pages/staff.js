import Head from "next/head";
import Banner from "../components/global/Banner/Banner";
import PageEnd from "../components/global/pageEnd/PageEnd";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";
import Coaches from "../components/layouts/Staff/coaches/Coaches";
import Presentation from "../components/layouts/Staff/presentation/Presentation";
import { PresentationProvider } from "../context/PresentationContext";

export default function Home() {
  

  return (
    <div>
      <Head>
        <title>Dunes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="scroll">
        <Banner imgSrc="/assets/img/coach.jpeg"/>
        <RightLayout
      i="1" 
      title="Le mot de <span>Darnell</span>"
      buttonString="La programmation"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis."
      img="https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2021/06/24/node_206271/38562647/public/2021/06/24/B9727483988Z.1_20210624164655_000%2BGRCID9E8F.1-0.jpg?itok=nKUcIYBu1624546022"
      />
        <Coaches/>
        <PageEnd video_url='/assets/video/staff.mp4' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lorem quam. Nullam velit ante, scelerisque nec velit a, imperdiet pretium ipsum. Sed aliquam dui velit, ac finibus tellus vehicula quis.' title="Rejoignez l'équipe"/>
      </main>
    </div>
  );
}
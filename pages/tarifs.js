import Head from "next/head";
import Banner from "../components/global/Banner/Banner";
import Coaches from "../components/layouts/Staff/coaches/Coaches";

export default function Tarif () {
  

  return (
    <div>
      <Head>
        <title>Dunes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="scroll">
        <Banner imgSrc="/assets/img/tarif.png"/>
      </main>
    </div>
  );
}

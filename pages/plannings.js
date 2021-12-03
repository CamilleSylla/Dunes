import planning_data from "../planning.json"
import Head from "next/head";
import Banner from "../components/global/Banner/Banner";
import Planning from "../components/layouts/Plannings/Planning/Planning";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Plannings ({trainings, currentWeek}) {

  const [user, setUser] = useContext(UserContext)
  
  return (
    <div>
          <Head>
            <title>Dunes</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main id="scroll">
            <Banner imgSrc="/assets/img/plannings.jpg"/>
            <Planning currentWeek={currentWeek} data={planning_data} trainings={trainings}/>
          </main>
        </div>
      );
    }
    
    export async function getServerSideProps() {
  
  const newData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/creneaux`)
  .then(res => res.data)

  const currentWeek = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/week`)
  .then(res => res.data)

  const formatData = newData.map(el => {
      const formatted = {
        id: el.id,
        nom : el.entrainement.nom,
        start : el.start,
        day : el.jour.nom,
        color : el.entrainement.couleur
      }
      return formatted
    })
  return {
      props: {
          trainings : formatData,
          currentWeek : currentWeek,
      }
  }
}
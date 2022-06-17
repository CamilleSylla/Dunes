import Banner from "../components/global/Banner/Banner";
import Planning from "../components/layouts/Plannings/Planning/Planning";
import axios from "axios";
import Header from "../components/global/Head/Head";

export default function Plannings ({trainings, currentWeek}) {
  
  return (
    <div>
          <Header/>
          <main id="scroll">
            {/* <Banner imgSrc="/assets/img/plannings.webp" title="plannifier vos séances"/> */}
            {/* <Planning currentWeek={currentWeek}  trainings={trainings}/> */}
            <div style={{width: "100%", height: "100vh", background: "#F2F2F2",  display: "flex", justifyContent: "center", alignItems:"center"}}>
              <h1 style={{color: "red", padding: "3rem", border: "10px solid red", borderRadius: "2rem"}}>Cette page est actuellement en reconstruction</h1>
            </div>
          </main>
        </div>
      );
    }
    
//     export async function getServerSideProps() {
  
//   const newData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/creneaux/all`)
//   .then(res => res.data)

//   const currentWeek = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/week`)
//   .then(res => res.data)

//   const formatData = newData.map(el => {
//       const formatted = {
//         id: el.id,
//         nom : el.entrainement.nom,
//         start : el.start,
//         day : el.jour.nom,
//         color : el.entrainement.couleur,
//         active_reservations : el.active_reservations
//       }
//       return formatted
//     })
//   return {
//       props: {
//           trainings : formatData,
//           currentWeek : currentWeek,
//       }
//   }
// }
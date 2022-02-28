import Banner from "../components/global/Banner/Banner";
import Header from "../components/global/Head/Head";
import PageEnd from "../components/global/pageEnd/PageEnd";
import RightLayout from "../components/layouts/Home/rightLayout/rightLayout";
import Coaches from "../components/layouts/Staff/coaches/Coaches";

export default function Home() {
  return (
    <div>
      <Header/>
      <main id="scroll">
        <Banner
          imgSrc="/assets/img/staffbanner.webp"
          title="Un encadrement idéal"
        />
        <RightLayout
          i="1"
          title="Le mot de <span>Darnell</span>"
          button={{label : "La programmation", link: "/plannings"}}
          desc={` Dunes n'est pas qu'une Salle du Sport !\nC'est un état d'esprit, c'est un style de vie, c'est vous challenger vous même pour atteindre vos objectifs.\n\nDUNESGST SUIVEZ LE MOUVEMENT !`}
          img="/staff/darnell-mot.webp"
        />
        <Coaches />
        <PageEnd
          video_url="/assets/video/staff.mp4"
          desc="Joignez-vous à notre équipe pour nous apporter votre connaissance et nous aider à développer nous athlètes !"
          title="Rejoignez l'équipe"
          url="/contact"
        />
      </main>
    </div>
  );
}

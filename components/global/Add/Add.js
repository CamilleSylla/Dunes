import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './add.module.scss'

export default function Add () {
    const [display, setDisplay] = useState(false)

    const Announcement = () => {

        const content = `
        <h1>
        Tu n'as pas le temps de t'entrainer ?
        </h1>
        
        <h2>THE FAST WORKOUT</h2>
        <p>
        Dunes ouvre la salle et te laisses la possibilité de t'entrainer le midi du lundi au vendredi
        </p>
        <h2>
        2 sessions de 40 minutes chaque midi : 
        </h2>
        <ul>
        <li>
        de 12h00 à 12h40. 
        </li>
        <li>
        de 12h30 a 13h10      
        </li>
        </li>
        </ul>
        <p>
        Plus d'excuses pour ne pas t'entrainer ! 
        </p>
        `

//         const Form = () => {
//             const formData = {
//                 subject : "Contact Pour l'événement du Samedi 19 Mars",
//             }

//             const onChange = (key, value) => {
//                 formData[key] = value
//             }

//             const onValidate = async () => {
//                 console.log(formData);
//                 if (formData.name && formData.email && formData.tel) {
//                     const sendMessage = await axios.post("/api/addContact", formData).then(res => {
//                         if (res.status === 200) {
// alert(
// `Merci, 
// Dunes va prendre en charge votre demande !

// A bientôt !`
//                             )
//                             setDisplay(false)
//                         } else {
// alert(
// `Oups, 
// Une erreur c'est produite, merci de reessayer ultérieurement.
    
// A bientôt !`
//                             )
//                         };
//                     })
//                 } else {
// alert(`
// Oups, 

// Merci de bien vouloir remplir tout les champs du formulaire...
//                     `)
//                 }
//             }
            
//             return (
//                 <div className={style.form_wrapper}>
//                     <h3>Plus d'informations</h3>
//                     <input type='text' placeholder='Nom et Prénom' onChange={e => onChange("name", e.target.value)}/>
//                     <input type="email" placeholder="Email" onChange={e => onChange("email", e.target.value)}/>
//                     <input type='tel' placeholder="N° de téléphone" onChange={e => onChange("tel", e.target.value)}/>
//                     <span>En validant ce formulaire, je certifie que les informations ci-dessus sont correctes et accepte que mes données puissent être utilisé dans un but commercial.</span>
//                     <button onClick={onValidate}>Validé</button>
//                 </div>
//             )
//         }

        return (
            <div className={style.container}>
                <CloseBtn/>
                <img className={style.banner_img} src="/assets/event/intensity.webp"/>
                <div className={style.content}>
                <h1>Dunes - Annonce ! <span style={{fontSize: "4vh"}}></span> </h1>
                <div dangerouslySetInnerHTML={{__html: content}}/>
                </div>
                {/* <Form/> */}
            </div>
        )
    }
    const CloseBtn = () => {
        return( 
        <button onClick={() => setDisplay(false)} className={style.close}>
            Fermer
        </button>

        )
    }

    useEffect(() => {

    }, [display])

    return (
        <>
        {display === true ?
        (<section className={style.wrapper}>
             <Announcement/> 
        </section>)
        : null}
        </>
    )
}
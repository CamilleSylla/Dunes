import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './add.module.scss'

export default function Add () {
    const [display, setDisplay] = useState(true)

    const Announcement = () => {

        const content = `
        <p>
        L’équipe DUNES vous propose de suivre deux jours de formation aux côtés de Quentin Ott, actuellement préparateur physique du Pôle Espoirs de ski alpin à Chamonix et responsable de la préparation athlétique au sein de nos locaux. 
        </p>
        
        <p>
        Passionné par la complexité de l’entrainement, il vous partagera ses expériences passées dans le rugby professionnel en Nouvelle-Zélande ainsi que dans le basket-ball et le ski alpin de haut-niveau en France. 
        </p>
        <p>
        Que ce soit dans une logique de prévention, de performance ou de pur plaisir, venez apprendre et vous challenger d’une manière originale et ludique lors ce week-end où de nombreuses thématiques seront abordées. 
        </p>
        <h2>
        Voici le programme pour le samedi 19 mars 2022 : 
        </h2>
        <ul>
        <li>
        9h à 11h : « Dynamic and fun training, session 1». 
        </li>
        <li>
        14h à 16h : « Dynamic and fun training session 2».         </li>
        </li>
        </ul>
        <h2>
        Et le programme du dimanche 20 mars 2022 : 
        </h2>
        <ul>
        <li>
        9h à 12h : « Apprendre à planifier sa saison et à se développer de manière spécifique en fonction de son sport, de la théorie à la pratique ». 
        </li>
        </ul>
        <p>
        Soyez réactifs, les places sont limitées !
        </p>
        <h3>
        Tarif : 100 euros par stagiaire pour les 3 séances de formation. 
</h3>`

        const Form = () => {
            const formData = {
                subject : "Contact Pour l'événement du Samedi 19 Mars",
            }

            const onChange = (key, value) => {
                formData[key] = value
            }

            const onValidate = async () => {
                console.log(formData);
                if (formData.name && formData.email && formData.tel) {
                    const sendMessage = await axios.post("/api/addContact", formData).then(res => {
                        if (res.status === 200) {
alert(
`Merci, 
Dunes va prendre en charge votre demande !

A bientôt !`
                            )
                            setDisplay(false)
                        } else {
alert(
`Oups, 
Une erreur c'est produite, merci de reessayer ultérieurement.
    
A bientôt !`
                            )
                        };
                    })
                } else {
alert(`
Oups, 

Merci de bien vouloir remplir tout les champs du formulaire...
                    `)
                }
            }
            
            return (
                <div className={style.form_wrapper}>
                    <h3>Plus d'informations</h3>
                    <input type='text' placeholder='Nom et Prénom' onChange={e => onChange("name", e.target.value)}/>
                    <input type="email" placeholder="Email" onChange={e => onChange("email", e.target.value)}/>
                    <input type='tel' placeholder="N° de téléphone" onChange={e => onChange("tel", e.target.value)}/>
                    <span>En validant ce formulaire, je certifie que les informations ci-dessus sont correctes et accepte que mes données puissent être utilisé dans un but commercial.</span>
                    <button onClick={onValidate}>Validé</button>
                </div>
            )
        }

        return (
            <div className={style.container}>
                <CloseBtn/>
                <img className={style.banner_img} src="/assets/event/event1.jpg"/>
                <div className={style.content}>
                <h1>Dunes - Annonce ! <span style={{fontSize: "4vh"}}>samedi 19 mars 2022</span> </h1>
                <div dangerouslySetInnerHTML={{__html: content}}/>
                </div>
                <Form/>
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
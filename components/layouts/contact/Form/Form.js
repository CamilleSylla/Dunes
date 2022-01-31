import axios from 'axios'
import { useRouter } from 'next/router'
import Button from '../../../global/button/Button'
import style from './form.module.scss'

export default function Form () {
    let form = {}
    const router = useRouter()
    const handleChange = (key, value) => {
        form[key] = value
    }

    const onSubmit = async () => {
        if ( form.nom && form.email && form.subject && form.msg ) {
            try {
                const sendMail = await axios.post(`/api/contactForm`, form)
                .then(res => alert('Merci votre message a bien été envoyé.'))
                router.push('/')
            } catch {
                alert("Une erreur c'est produite assurez-vous d'avoir bien rempli le formulaire et réessayez.")
            }
    } else {
        alert("Une erreur c'est produite assurez-vous d'avoir bien rempli le formulaire et réessayez.")
    }
}
 
    return (
        <section className={style.wrapper}>
            <form>
                <h1>Prennons un premier contact</h1>
            <input onChange={e => handleChange("nom", e.target.value)} type="text" placeholder='Nom et prenom'/>
            <input onChange={e => handleChange("email", e.target.value)} type="email" placeholder='Votre adresse e-mail'/>
            <select onChange={e => handleChange("subject", e.target.value)}>
                <option>Selectionnez un sujet</option>
                <option>Reserver mon essaie gratuit</option>
                <option>Inscription</option>
                <option>Informations</option>
                <option>Recrutement</option>
                <option>Autre</option>
            </select>
            <textarea onChange={e => handleChange("msg", e.target.value)} placeholder='Votre message'></textarea>
            <div style={{width: "auto", height: "auto"}} onClick={() => onSubmit()}>
            <Button text="Soumettre"/>
            </div>
            </form>
        </section>
    )
}
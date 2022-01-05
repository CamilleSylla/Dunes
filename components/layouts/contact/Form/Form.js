import Button from '../../../global/button/Button'
import style from './form.module.scss'

export default function Form () {

    return (
        <section className={style.wrapper}>
            <form>
                <h1>Prennons un premier contact</h1>
            <input type="text" placeholder='Nom et prenom'/>
            <input type="email" placeholder='Votre adresse e-mail'/>
            <select>
                <option>Selectionnez un sujet</option>
                <option>Reserver mon essaie gratuit</option>
                <option>Inscription</option>
                <option>Informations</option>
                <option>Recrutement</option>
                <option>Autre</option>
            </select>
            <textarea placeholder='Votre message'></textarea>
            <Button text="Soumettre"/>
            </form>
        </section>
    )
}
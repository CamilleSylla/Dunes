import axios from 'axios'
import  Router  from 'next/router'
import { useContext, useRef, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import Spacing from '../../global/Spacing'
import Layout from '../../global/wrappers/Layout/Layout'
import style from './login.module.scss'

export default function Login () {

    const mailInput = useRef()
    const passwordInput = useRef()

    const [user, setUser] = useContext(UserContext)

    const onConnection = async () => {

        const loginInfos = {
                    identifier : mailInput.current.value,
                    password : passwordInput.current.value
                }
        const { data, status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, loginInfos)
        if (status === 200) {
            localStorage.setItem('dunes_token', data.jwt);
            data.user.jwt = data.jwt
            Router.push('/plannings')
            setUser(data.user)
        }
    }

    const Form = () => {

        return (
            <div className={style.form_container}>
                <h1>Content de te revoir</h1>
                <p>Connecte toi afin de pouvoir reserver ton spot pour ton prochain entrainement</p>
                <form>
                    <div>
                    <label>Votre adresse email</label>
                    <input name="email" ref={mailInput} type="email" placeholder="noah_verneau@email.fr"/>
                    </div>
                    <div>
                    <label >Mot de passe</label>
                    <input ref={passwordInput} name="password" type="password"/>
                    </div>
                    <input onClick={onConnection} className={style.submit} type="button" value="Connection"/>
                </form>
            </div>
        )
    }

    const Window = () => {
        return (
            <div className={style.wrapper}>
                <img src="/assets/img/login.webp"/>
                <Form/>
            </div>
        )
    }

    return (
        <Layout>
            <Window/>
        </Layout>
    )
}
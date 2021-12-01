import axios from 'axios'
import Head from 'next/head'
import Login from '../components/layouts/Login/Login'

export default function Connection () {
    
    return (
        <div>
          <Head>
            <title>Dunes</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main id="scroll">
              <Login/>
          </main>
        </div>
    )
}
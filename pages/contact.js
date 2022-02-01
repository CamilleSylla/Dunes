import { useContext, useEffect } from 'react'
import Header from '../components/global/Head/Head'
import Form from '../components/layouts/contact/Form/Form'
import { ResponsiveContext } from '../context/MobileContext'
import { userDevice } from '../tools/global'

export default function Contact () {
  const [responsive, setResponsive] = useContext(ResponsiveContext)
  useEffect(() => {
    if (!responsive) {
      setResponsive(userDevice())
    }
  },[])
    
    return (
        <div>
          <Header/>
          <main style={{position: "relative", height: "100vh", width: "100%"}} id="scroll">
              <Form/>
              {
                responsive ? 
                null
                : (<img src="/assets/img/complexe.webp" style={{position: "absolute", left: "0", top:"0", height: "100%", width:"50%", objectFit:"cover"}}/>)
              }
              
          </main>
        </div>
    )
}
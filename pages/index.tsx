import { useState } from 'react'
import { wallet } from '../utils/we3/wallet'

export default function Home() {

  const [account,setAccount] = useState("");


  return (
    <>
    {
      account == ""  ? 
      <>
     <div
     onClick={()=>{wallet.connect(setAccount)}}
     >
       
       Entrar
     </div>
      </>
      :
      <>
      <div>
        {account}
      </div>
        <div
     onClick={()=>{wallet.desconect(setAccount)}}
     >
       Sair
     </div>
      </>
    }

    </>
  )
}

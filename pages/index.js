import Header from "../components/Header"
import Hero from "../components/Hero"
import { useWeb3 } from "@3rdweb/hooks"
import { useEffect } from "react"
// import {client} from '@sanity/client'


const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'bikeshop',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default function Home(){
  const {address,connectWallet}=useWeb3()
  
  useEffect(() => {
    if(!address) return
    ;(async () =>{
      const userDoc={
        _type:'users',
        _id:address,
        userName:'Unnamed',
        walletAddress:address,
      }
      client.createIfNotExists(userDoc).then((res) => {
        console.log('User was created (or was already present)')
      })
    })()
  }, [address])

  //above is immediately invoked fn
  //Like this we defined the fn and then immediately called
  // (()=>console.log('Hello'))()
  
  
  return (
    <div className={style.wrapper}>
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button className={style.button} onClick={()=>connectWallet('injected')}>Connect Wallet</button>
          <div className={style.details}>You need Metamask to run this app</div>
        </div>
    )}
    </div>
  )
}

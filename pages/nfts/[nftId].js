import Header from "../../components/Header";
import {useWeb3} from '@3rdweb/hooks'
import {useEffect,useState,useMemo} from 'react'
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router";
import NFTImage from "../../components/nft/NFTImage";
import GeneralDetails from "../../components/nft/GeneralDetails";
import ItemActivity from "../../components/nft/ItemActivity";

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}


const Nft = () => {
  const {provider}=useWeb3()
  const [selectedNft,setSelectedNft]=useState()
  const [listings,setListings]=useState([])
  const router=useRouter()

  const nftModule=useMemo(()=>{
    if(!provider) return
    const sdk=new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/VKmnNT8n20d-ymMOpXB4flTuPrnzlULG'
    )
    return sdk.getNFTModule('0x4dEB796Fe4A28C45d85618C6bce7208F3551196e')
  },[provider])

  useEffect(() => {
    if(!nftModule) return
    ;(async ()=>{
      const nfts=await nftModule.getAll()
      const selectedNftItem=nfts.find(
        (nft)=>nft.id===router.query.nftId
      )
      setSelectedNft(selectedNftItem)
    })()
  }, [nftModule])
  

  const marketPlaceModule=useMemo(()=>{
    if(!provider) return
    const sdk=new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/VKmnNT8n20d-ymMOpXB4flTuPrnzlULG'
    )
    return sdk.getMarketplaceModule('0x91170770647b3ddE3Dbabf2E7fDAe42985e492a7')
  },[provider])


  useEffect(() => {
    if(!marketPlaceModule) return
    ;(async ()=>{
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])
  

  return (
    <div>
      <Header/>
      {/* <NFTImage selectedNft={selectedNft}/> */}
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft}></NFTImage>
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft}></GeneralDetails>
            </div>
          </div>
          <ItemActivity></ItemActivity>
        </div>
      </div>
    </div>
  )
}

export default Nft
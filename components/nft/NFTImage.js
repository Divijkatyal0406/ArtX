import {IoMdSnow} from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    topBar: `bg-[#303339] p-2 w-44 rounded-t-lg border-[#151c22] border`,
    topBarContent: `flex items-center`,
    likesCounter: `flex-1 flex items-center justify-end`,
    imageContainer:`w-44 flex h-60 border-2 border-slate-200 rounded-lg`
}

const NFTImage = ({selectedNft}) => {
  return (
    <div>
        <div className={style.topBar}>
            <div className={style.topBarContent}>
                <IoMdSnow />
                <div className={style.likesCounter}>
                    <AiOutlineHeart />
                    2.3K
                </div>
            </div>
        </div>
        <div className={style.imageContainer}>
            <img src={selectedNft?.image}></img>
        </div>
    </div>
  )
}

export default NFTImage
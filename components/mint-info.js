import { BallTriangle } from "react-loader-spinner"
import ConnectBtn from "./connect-btn"
import MintBtn from "./mint-btn"

const MintInfo = ({ loading, logged, login, mintNFT, claimedSupply, totalSupply, nftPrice }) => {
  return (
    <>
      {loading ? (
        <div className="justify-center flex">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="beige"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="text-2xl mb-1 font-semibold">
            Shots NFT Drop
          </div>
          <div className="text-xl mb-1 font-semibold">
            → {claimedSupply} / {totalSupply} collectibles shots
          </div>
          <div className="text-xl mb-3 font-semibold">
            → Mint price {nftPrice}rk
          </div>
          <div>
            {logged ? <MintBtn mintNFT={mintNFT} /> : <ConnectBtn login={login} />}
          </div>
        </>
      )}
    </>
  )
}

export default MintInfo
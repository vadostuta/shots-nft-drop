import ConnectBtn from "./connect-btn"
import MintBtn from "./mint-btn"

const MintInfo = ({ logged }) => {
  return (
    <>
      <div className="text-2xl mb-1 font-semibold">
        Shots NFT Drop
      </div>
      <div className="text-xl mb-1 font-semibold">
        → 0 / 25 collectibles shots
      </div>
      <div className="text-xl mb-3 font-semibold">
        → Mint price 1rk
      </div>
      <div>
        {logged ? <MintBtn /> : <ConnectBtn />}
      </div>
    </>
  )
}

export default MintInfo
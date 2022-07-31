const MintBtn = ({mintNFT}) => {
  return (
    <>
      <button onClick={mintNFT} className="rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]">
        Mint Your NFT
      </button>
    </>
  )
}

export default MintBtn
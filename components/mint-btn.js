const MintBtn = () => {
  const nftPrice = 1
  return (
    <button className="rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]">
      Mint Your NFT ({nftPrice} ETH)
    </button>
  )
}

export default MintBtn
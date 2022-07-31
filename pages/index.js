import LetterLayout from "../components/letter-layout";
import MintInfo from "../components/mint-info";
import { useAddress, useMetamask, useNFTDrop } from '@thirdweb-dev/react'
import useFetcher from '../utils/fetch'
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function Home() {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  
  const fetcher = useFetcher()
  const nftDrop = useNFTDrop(process.env.NEXT_PUBLIC_NFT_DROP_ADDRESS)

  const [loading, setLoading] = useState(false)

  const [claimedSupply, setClaimedSupply] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0)
  const [nftPrice, setNFTPrice] = useState(0)

  const mintNFT = async () => {
    if (!nftDrop) return

    try {
        const quantity = 1
        const transaction = await nftDrop.claimTo(address, quantity)

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    if (!address) return

    setLoading(true)

    const getNFTDropDetails = async () => {
        try {
            const { claimedSupply, totalSupply, nftPrice } = await fetcher.get('./api/get-nft-drop')

            setClaimedSupply(claimedSupply)
            setTotalSupply(totalSupply)
            setNFTPrice(nftPrice)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    getNFTDropDetails()
  }, [address])

  return (
    <>
      <div className="min-h-screen sm:p-3 sm:pt-5 xl:p-10 xl:pt-snd-2xl flex flex-wrap items-center">
        <div className="p-10">
          <LetterLayout />
        </div>
        <div className="ml-10">
          <MintInfo loading={loading} mintNFT={mintNFT} logged={address} login={connectWithMetamask} claimedSupply={claimedSupply} totalSupply={totalSupply} nftPrice={nftPrice} />
        </div>
        <div className="fixed bottom-10 right-10 underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
          <Link className="" href="https://vadoshere.com/" passHref={true}>
            <a target="_blank" rel="noopener noreferrer">
              vadoshere
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

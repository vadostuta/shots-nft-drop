import LetterLayout from "../components/letter-layout";
import MintInfo from "../components/mint-info";

export default function Home() {
  return (
    <>
      <div className="min-h-screen p-10 pt-snd-xl flex items-center">
        <div>
          <LetterLayout />
        </div>
        <div className="ml-10">
          <MintInfo logged={false} />
        </div>
      </div>
    </>
  )
}

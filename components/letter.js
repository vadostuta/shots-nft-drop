import Image from 'next/image';

const Letter = ({ symbol, imageNumber, open }) => {

  return (
    <div className="mr-5 cursor-pointer relative w-snd-xl h-snd-xl text-center">
      <div className="absolute inset-0 bg-cover z-0 text-snd-xl font-bold leading-snd-xl">
        { symbol }
      </div>
      <Image
        src={`/batch-upload/${imageNumber}.png`}
        alt="Picture of the author"
        layout="fill"
        objectFit="fill"
        className={`${!open && 'opacity-0 hover:opacity-100 duration-300'} absolute inset-0 z-10 bg-cover bg-center`}
      />
    </div>
  )
}

export default Letter
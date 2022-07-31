import ExportedImage from "next-image-export-optimizer";

const Letter = ({ symbol, imageNumber, open }) => {

  return (
    <div className="mr-5 cursor-pointer relative w-snd-2xl h-snd-2xl text-center sm:w-snd-sm 2xl:w-snd-2xl xl:w-snd-xl xl:h-snd-xl sm:h-snd-sm">
      <div className="absolute inset-0 bg-cover z-0 text-snd-2xl sm:text-snd-sm 2xl:text-snd-2xl xl:text-snd-xl font-bold leading-snd-2xl xl:leading-snd-xl sm:leading-snd-sm 2xl:leading-snd-2xl">
        { symbol }
      </div>
      <ExportedImage
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
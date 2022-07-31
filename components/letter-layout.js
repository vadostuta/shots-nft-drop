import Letter from './letter';

const LetterLayout = () => {
  return (
    <>
      <div className="flex mb-10">
        <Letter symbol={'N'} imageNumber={'1'} />
        <Letter symbol={'F'} imageNumber={'2'} />
        <Letter symbol={'T'} imageNumber={'3'} />
      </div>
      <div className="flex mb-10">
        <Letter symbol={'D'} imageNumber={'4'} />
        <Letter symbol={'R'} imageNumber={'5'} />
        <Letter symbol={'O'} imageNumber={'8'} open={true} />
        <Letter symbol={'P'} imageNumber={'6'} />
      </div>
      <div className="flex">
        <Letter symbol={'S'} imageNumber={'7'} />
        <Letter symbol={'H'} imageNumber={'9'} />
        <Letter symbol={'O'} imageNumber={'10'} />
        <Letter symbol={'T'} imageNumber={'11'} />
        <Letter symbol={'S'} imageNumber={'12'} />
      </div>
    </>
  )
}

export default LetterLayout
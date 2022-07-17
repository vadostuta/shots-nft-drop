import Letter from './letter';

const LetterLayout = () => {
  return (
    <>
      <div className="flex mb-10">
        <Letter symbol={'N'} imageNumber={'7'} />
        <Letter symbol={'F'} imageNumber={'2'} />
        <Letter symbol={'T'} imageNumber={'3'} />
      </div>
      <div className="flex mb-10">
        <Letter symbol={'D'} imageNumber={'4'} />
        <Letter symbol={'R'} imageNumber={'5'} />
        <Letter symbol={'O'} imageNumber={'6'} open={true} />
        <Letter symbol={'P'} imageNumber={'1'} />
      </div>
      <div className="flex">
        <Letter symbol={'S'} imageNumber={'8'} />
        <Letter symbol={'H'} imageNumber={'9'} />
        <Letter symbol={'O'} imageNumber={'3'} />
        <Letter symbol={'T'} imageNumber={'6'} />
        <Letter symbol={'S'} imageNumber={'2'} />
      </div>
    </>
  )
}

export default LetterLayout
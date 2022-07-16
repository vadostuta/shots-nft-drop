import Letter from './letter';

const LetterLayout = ({ symbol }) => {
  return (
    <>
      <div className="flex mb-10">
        <Letter symbol={'N'} />
        <Letter symbol={'F'} />
        <Letter symbol={'T'} />
      </div>
      <div className="flex mb-10">
        <Letter symbol={'D'} />
        <Letter symbol={'R'} />
        <Letter symbol={'O'} />
        <Letter symbol={'P'} />
      </div>
      <div className="flex">
        <Letter symbol={'S'} />
        <Letter symbol={'H'} />
        <Letter symbol={'O'} />
        <Letter symbol={'T'} />
        <Letter symbol={'S'} />
      </div>
    </>
  )
}

export default LetterLayout
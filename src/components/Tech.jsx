import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const Tech = () => {

  const renderTechnology= technologies.map((technology)=>{
    return (
      <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon}/>
      </div>
    );
  });
  return (
    <div className='flex flex-wrap flex-row justify-center gap-10'>{renderTechnology}</div>
  )
}

export default SectionWrapper(Tech,"");
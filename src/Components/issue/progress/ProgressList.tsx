import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ProgressItem from "./ProgressItem";

const ProgressList = () => {
  const progressState = useSelector((state:RootState)=>state.progress)


  return (
    <div>
      {progressState.map((item)=>{
        return <ProgressItem key={item.id} item={item}/>
      })}
      
    </div>
  );
};
export default ProgressList

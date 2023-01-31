import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import IssueItem from "./IssueItem";

const IssueList = () => {
  const issueState = useSelector((state:RootState)=>state.issue)
  return (
    <div>
      {issueState.map((item)=>{
        return <IssueItem key={item.id} item={item}/>
      })}
      
    </div>
  );
};
export default IssueList

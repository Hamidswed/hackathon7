import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import IssueItem from "./IssueItem";
import {useDraggable} from '@dnd-kit/core';

const IssueList = () => {
  const issueState = useSelector((state:RootState)=>state.issue)
  const {attributes, listeners, setNodeRef} = useDraggable({
    id: 'unique-id',
  });

  return (
    <div ref={setNodeRef}>
      {issueState.map((item)=>{
        return <IssueItem key={item.id} item={item} {...listeners} {...attributes}/>
      })}
      
    </div>
  );
};
export default IssueList

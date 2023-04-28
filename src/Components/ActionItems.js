import ActionItemsList from './ActionItemsList';
import{useState, React} from 'react';
import '../Styles/ActionItems.css';



const ActionItems = () => {
    const [expanded, setExpanded] = useState(false);
    const actionItems = [
      { id: 1, title: 'Complete project proposal', dueDate: '4/15/2023' },
      { id: 2, title: 'Schedule meeting with client', dueDate: '4/20/2023' },
      { id: 3, title: 'Prepare presentation slides', dueDate: '4/30/2023' },
      { id: 4, title: 'Research industry trends', dueDate: '5/5/2023' },
      { id: 5, title: 'Revise marketing plan', dueDate: '4/05/2023' },
      { id: 6, title: 'Create user personas', dueDate: '2/30/2023' },
    ];
  
    const handleExpandList = () => {
      setExpanded(true);
    };
  
    return (
      <div>
        <ActionItemsList items={actionItems} expanded={expanded} />
        {!expanded && (
          <button className="btn btn-secondary" onClick={handleExpandList}>
            Expand list
          </button>
        )}
      </div>
    );
  };
  
  export default ActionItems;

    
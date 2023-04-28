import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';
import '../Styles/Actions.css';

const ActionItemsList = ({ items }) => {
  const now = moment();
  return (
    <ListGroup>
      {items.map((item) => {
        const dueDate = moment(item.dueDate);
        const daysUntilDue = dueDate.diff(now, 'days');
        let dueDateClassName = '';
        if (daysUntilDue < 0) {
          dueDateClassName = 'past-due';
        } else if (daysUntilDue < 10) {
          dueDateClassName = 'approaching-due';
        } else {
          dueDateClassName = 'far-due';
        }
        return (
          <ListGroupItem key={item.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.title}</h5>
              <small className="text-muted">
                Due: <span className={dueDateClassName}>{item.dueDate}</span>
              </small>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default ActionItemsList;

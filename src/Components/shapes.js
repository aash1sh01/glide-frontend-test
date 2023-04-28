import { FaStickyNote, FaRegSquare, FaRegCircle, FaRegEdit } from 'react-icons/fa';

export const shapeOptions = [
  { value: 'ellipse', name: 'Circle', icon: <FaRegCircle /> },
  { value: 'rectangle', name: 'Rectangle', icon: <FaRegSquare /> },
  { value: 'stickyNote', name: 'Sticky Note', icon: <FaStickyNote /> },
  { value: 'textBox', name: 'Text Box', icon: <FaRegEdit /> },
];

export const mapShapeToClass = (shape) => {
  switch (shape) {
    case 'ellipse':
      return 'ellipse-node';
    case 'rectangle':
      return 'rectangle-node';
    default:
      return '';
  }
};

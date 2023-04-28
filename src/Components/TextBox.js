export const TextBoxNode = (nodeId) => {
    return {
      data: { id: nodeId, label: nodeId, shape: 'rectangle' },
      classes: 'text-box',
    };
  };
  
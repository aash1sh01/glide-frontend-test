export const StickyNoteNode = (nodeId) => {
    return {
      data: { id: nodeId, label: nodeId, shape: 'rectangle' },
      classes: 'sticky-note',
    };
  };
  
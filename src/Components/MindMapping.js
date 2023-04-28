import React, { useState } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import { FaEdit } from 'react-icons/fa';
import '../Styles/MindMapping.css';
import { shapeOptions, mapShapeToClass } from './shapes';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { StickyNoteNode } from './StickyNote';
import { TextBoxNode } from './TextBox';
import NodeLabelEditor from './NodeLabelEditor';
cytoscape.use(dagre);

const initialGraphData = {
  nodes: [],
  edges: [],
};

const MindMapping = () => {
  const [graphData, setGraphData] = useState(initialGraphData);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeType, setNodeType] = useState(shapeOptions[0].value);

  const addNode = () => {
    const newNodeId = `Node ${graphData.nodes.length + 1}`;

    let newNode;
    switch (nodeType) {
      case 'stickyNote':
        newNode = StickyNoteNode(newNodeId);
        break;
      case 'textBox':
        newNode = TextBoxNode(newNodeId);
        break;
      default:
        const newNodeClass = mapShapeToClass(nodeType);
        newNode = {
          data: { id: newNodeId, label: newNodeId },
          classes: newNodeClass,
        };
    }

    let newEdges = [...graphData.edges];
    if (selectedNode && graphData.nodes.find((node) => node.data.id === selectedNode)) {
      newEdges.push({ data: { source: selectedNode, target: newNodeId } });
    }
    const newNodes = [...graphData.nodes, newNode];

    setGraphData({
      nodes: newNodes,
      edges: newEdges,
    });

    setSelectedNode(newNodeId);
  };

  const handleNodeLabelChange = (nodeId, newLabel) => {
    const newNodes = graphData.nodes.map((node) => {
      if (node.data.id === nodeId) {
        return { ...node, data: { ...node.data, label: newLabel } };
      }
      return node;
    });
    setGraphData({ ...graphData, nodes: newNodes });
  };
  const handleNodeClick = (e) => {
    setSelectedNode(e.target.id());
    const nodeId = e.target.id();
    const node = e.cy.getElementById(nodeId);
    const currentLabel = node.data('label');
    openModal(nodeId, currentLabel);
  };

  const elements = [...graphData.nodes, ...graphData.edges];
  const [labelEditorOpen, setLabelEditorOpen] = useState(false);
  const [labelEditorNode, setLabelEditorNode] = useState(null);
  const [labelEditorLabel, setLabelEditorLabel] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalNodeId, setModalNodeId] = useState(null);
  const [modalInputValue, setModalInputValue] = useState('');

  const openModal = (nodeId, label) => {
    setShowModal(true);
    setModalNodeId(nodeId);
    setModalInputValue(label);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalNodeId(null);
    setModalInputValue('');
  };

  const saveModalInput = () => {
    if (modalInputValue !== '') {
      handleNodeLabelChange(modalNodeId, modalInputValue);
    }
    closeModal();
  };

  return (
   
    <div className="map-container">
      <div className="button-container">
        <button className="add-node" onClick={addNode}>
          Add Node
        </button>
        <div className="shape-selector">
          <select onChange={(e) => setNodeType(e.target.value)} value={nodeType}>
            {shapeOptions.map((shape) => (
              <option key={shape.value} value={shape.value}>
                {shape.icon} {shape.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <CytoscapeComponent
        elements={elements}
        style={{ width: '100%', height: '600px' }}
        stylesheet={[
            {
                selector: 'node',
                style: {
                  'background-color': 'lightgreen',
                  'border-color': 'black',
                  'border-width': 1,
                  shape: 'data(shape)',
                  'text-valign': 'center',
                  'text-halign': 'center',
                  'font-size': 14,
                  color: 'black',
                  'text-wrap': 'wrap',
                  'text-max-width': '140px',
                  'width': '150px',
                  'height': '60px',
                  'padding': '10px',
                },
              },
              
              
            {
              selector: 'node',
              style: {
                content: 'data(label)',
                'text-valign': 'center',
                'text-halign': 'center',
              },
            },
            {
              selector: '.sticky-note',
              style: {
                'background-color': 'yellow',
                'border-color': 'black',
                'border-width': 1,
              },
            },
            {
              selector: '.text-box',
              style: {
                'background-color': 'white',
                'border-color': 'black',
                'border-width': 1,
              },
            },
            {
              selector: 'edge',
              style: {
                width: 1,
                'line-color': 'black',
              },
            },
            {
              selector: '.ellipse-node',
              style: {
                shape: 'ellipse',
              },
            },
            
            {
                selector: '.edit-node',
                style: {
                  'background-color': 'lightblue',
                  shape: 'rectangle',
                  'border-color': 'black',
                  'border-width': 1,
                  'text-valign': 'center',
                  'text-halign': 'center',
                  'font-size': 14,
                  color: 'black',
                  'text-wrap': 'wrap',
                  'text-max-width': '150px',
                  content: '',
                  'background-image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB0SURBVDhP7cxBCsAgDETRi3bmA3TgK3TgK3TiC8kXyAQ2oFE0lFZaaw8PVxE8Kx1x0xwAHnntvgN8Pi8zQFb/9gDsPdrNnACWdhn8xwDu+caXAOfN68HJyWf8z08A9gCyy+eFvQBgCywvO/MPAAAAAElFTkSuQmCC',
                  'background-fit': 'cover',
                  'background-width': '80%',
                  'background-height': '80%',
                  'background-position-x': '50%',
                  'background-position-y': '50%',
                },
              },
              
                  
            {
              selector: '.selected-node',
              style: {
                'border-color': 'red',
                'border-width': 2,
              },
            },
          ]}
          cy={(cy) => {
            cy.on('tap', 'node', handleNodeClick);
            cy.on('tap', '.edit-node', (e) => {
                e.stopPropagation();
                const nodeId = e.target.id();
                const node = e.cy.getElementById(nodeId);
                const currentLabel = node.data('label');
                openModal(nodeId, currentLabel); // Add this line to open the modal
              });
          cy.on('mouseover', 'node', (e) => {
            if (e.target.id() !== selectedNode) {
              e.target.addClass('edit-node');
            }
          });
          cy.on('mouseout', 'node', (e) => {
            if (e.target.id() !== selectedNode) {
              e.target.removeClass('edit-node');
            }
          });
          cy.on('select', 'node', (e) => {
            setSelectedNode(e.target.id());
          });
        }}
        layout={{ name: 'dagre' }}
      />
      <NodeLabelEditor
        isOpen={labelEditorOpen}
        onClose={() => setLabelEditorOpen(false)}
        onSubmit={(newLabel) => {
          handleNodeLabelChange(labelEditorNode, newLabel);
          setLabelEditorOpen(false);
        }}
        initialValue={labelEditorLabel}
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <input
              type="text"
              value={modalInputValue}
              onChange={(e) => setModalInputValue(e.target.value)}
            />
            <button onClick={saveModalInput}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MindMapping;

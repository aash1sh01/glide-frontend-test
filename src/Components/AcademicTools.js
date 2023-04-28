import React, { useState } from 'react';
import '../Styles/AcademicTools.css';
import CitationGenerator from './CitationGenerator';
import PlagiarismChecker from './PlagiarismChecker';
import GrammarChecker from './GrammarChecker';
import MathEquationSolver from './MathSolver';
import MindMapping from './MindMapping';
const AcademicTools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const renderTool = () => {
    switch (selectedTool) {
      case 'citation-generator':
        return <CitationGenerator />;
      case 'plagiarism-checker':
        return <PlagiarismChecker />;
      case 'grammar-checker':
        return <GrammarChecker />;
      case 'math-equation-solver':
        return <MathEquationSolver />;
      case 'mind-mapping':
        return <MindMapping />;
      default:
        return null;
    }
  };

  return (
    <div className="academic-tools">
      <h2>Academic Tools</h2>
      <div className="tool-selector">
        <button onClick={() => setSelectedTool('citation-generator')}>Citation Generator</button>
        <button onClick={() => setSelectedTool('plagiarism-checker')}>Plagiarism Checker</button>
        <button onClick={() => setSelectedTool('grammar-checker')}>Grammar and Style Checker</button>
        <button onClick={() => setSelectedTool('math-equation-solver')}>Math Equation Solver</button>
        <button onClick={() => setSelectedTool('mind-mapping')}>Mind Mapping</button>
      </div>
      <div className="selected-tool">{renderTool()}</div>
    </div>
  );
};

export default AcademicTools;

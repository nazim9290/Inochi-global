// pages/index.js
"use client"
import { useState } from 'react';
import Link from 'next/link';

const ChartNav = () => {
  const [sortOption, setSortOption] = useState('default');

  const handleSort = (option) => {
    setSortOption(option);
  };

  // Render your component based on the sort option
  const renderComponent = () => {
    switch (sortOption) {
      case 'option1':
        return <ComponentOption1 />;
      case 'option2':
        return <ComponentOption2 />;
      case 'option3':
        return <ComponentOption3 />;
      default:
        return <DefaultComponent />;
    }
  };

  return (
    <div>
      <nav>
        <Link href="/">
          <a onClick={() => handleSort('default')}>Default</a>
        </Link>
        <Link href="/">
          <a onClick={() => handleSort('option1')}>Option 1</a>
        </Link>
        <Link href="/">
          <a onClick={() => handleSort('option2')}>Option 2</a>
        </Link>
        <Link href="/">
          <a onClick={() => handleSort('option3')}>Option 3</a>
        </Link>
      </nav>

      <div>
        {/* Render the component based on the sort option */}
        {renderComponent()}
      </div>
    </div>
  );
};

// Your individual components
const ComponentOption1 = () => <div>Component Option 1</div>;
const ComponentOption2 = () => <div>Component Option 2</div>;
const ComponentOption3 = () => <div>Component Option 3</div>;
const DefaultComponent = () => <div>Default Component</div>;

export default ChartNav;

import React from 'react';

export const Input = ({ onAdd }: { onAdd: any }) => {
  const [text, setText] = React.useState('');

  const handleChange = (e: any) => setText(e.target.value);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

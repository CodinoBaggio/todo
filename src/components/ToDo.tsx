import React, { Key, useState } from 'react';
import { TodoItem } from './TodoItem';
import { item } from '../types/item';
import { Input } from './Input';
import { Filter } from './Filter';

const getKey = (): Key => Math.random().toString(32).substring(2);

export const ToDo = () => {
  const [items, setItems] = React.useState<any>([]);
  const [filter, setFilter] = React.useState('ALL');

  const handleAdd = (text: any) => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = (value: any) => setFilter(value);

  const displayItems = items.filter((item: any) => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
    return false;
  });

  const handleCheck = (checked: any) => {
    const newItems = items.map((item: any) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };
  return (
    <div className="panel">
      <div className="panel-heading">⚛️ React ToDo</div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilterChange} value={filter} />
      {displayItems.map((item: any) => (
        <TodoItem key={item.text} item={item} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{displayItems.length} items</div>
    </div>
  );
};

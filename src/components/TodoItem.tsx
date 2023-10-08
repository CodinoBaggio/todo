import React, { FC } from 'react';
import { item } from '../types/item';
import classNames from 'classnames';

type Props = {
  item: item;
  onCheck: any;
};

export const TodoItem: FC<Props> = (props) => {
  const { item, onCheck } = props;

  const handleChange = () => {
    onCheck(item);
  };

  return (
    <label className="panel-block">
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      <span
        className={classNames({
          'has-text-grey-light': item.done,
        })}
      >
        {item.text}
      </span>
    </label>
  );
};

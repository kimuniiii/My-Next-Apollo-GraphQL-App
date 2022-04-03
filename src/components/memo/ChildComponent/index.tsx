import { memo } from 'react';

export type ChildComponentProps = {
  text: string;
  count?: number;
  numberArray?: number[];
  onClick?: () => void;
} & JSX.IntrinsicElements['div'];

/**
 * メモ化されてないChildComponent
 * @param props {@link ChildComponentProps}
 */
export const ChildComponent = ({
  text,
  count,
  numberArray,
  onClick,
  ...args
}: ChildComponentProps) => {
  console.log('ChildComponent');

  return (
    <div onClick={onClick} {...args}>
      {text} : {count}
      {numberArray}
    </div>
  );
};

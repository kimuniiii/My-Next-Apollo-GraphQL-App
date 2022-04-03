import { memo } from 'react';

export type ChildComponentProps = {
  text: string;
  count: number;
  onClick?: () => void;
} & JSX.IntrinsicElements['div'];

/**
 * メモ化されてないChildComponent
 * @param props {@link ChildComponentProps}
 */
export const ChildComponent = ({ text, count, onClick, ...args }: ChildComponentProps) => {
  console.log('ChildComponentは再レンダリングされる');
  return (
    <div onClick={onClick} {...args}>
      {text} : {count}
    </div>
  );
};

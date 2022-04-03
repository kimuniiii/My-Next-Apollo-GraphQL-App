import { memo } from 'react';

export type ChildComponentProps = {
  text: string;
} & JSX.IntrinsicElements['div'];

/**
 * メモ化されてないChildComponent
 * @param props {@link ChildComponentProps}
 */
export const ChildComponent = ({ text, ...args }: ChildComponentProps) => {
  console.log('子供のコンポーネントは再レンダリングされる');
  return <div {...args}>{text}</div>;
};

import { forwardRef } from 'react';
import { RecoilState, useRecoilState } from 'recoil';

export type SampleRecoilTextInputProps = {
  textState: RecoilState<string>;
} & JSX.IntrinsicElements['div'];

/**
 * @概要 SampleRecoilTextInput
 * @説明 useRecoilStateでatomオブジェクトを受け取って子供で更新する
 * @param props {@link SampleRecoilTextInputProps}
 */
export const SampleRecoilTextInput = forwardRef<HTMLDivElement, SampleRecoilTextInputProps>(
  ({ textState, ...args }, ref) => {
    const [text, setText] = useRecoilState(textState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.currentTarget.value);
    };

    return (
      <div ref={ref} {...args}>
        <div>現在の入力値 : {text}</div>
        <input type='text' value={text} onChange={handleChange} />
      </div>
    );
  },
);

SampleRecoilTextInput.displayName = 'SampleRecoilTextInput';

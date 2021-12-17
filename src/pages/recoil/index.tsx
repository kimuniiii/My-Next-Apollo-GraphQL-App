import { RecoilRoot, atom } from 'recoil';
import { SampleRecoilTextInput } from 'src/components/recoil/SampleTextInput';

const SampleRecoil = () => {
  // これをstore.tsに格納する運用方法が良いか？
  const textState = atom({
    key: 'textState',
    default: '',
  });

  return (
    <RecoilRoot>
      <SampleRecoilTextInput textState={textState} />
    </RecoilRoot>
  );
};

export default SampleRecoil;

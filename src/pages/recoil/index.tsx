import { RecoilRoot, atom, selector } from 'recoil';
import { SampleRecoilTextInput } from 'src/components/recoil/SampleTextInput';

const SampleRecoil = () => {
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

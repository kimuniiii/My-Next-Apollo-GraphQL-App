import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const DynamicRoutePage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>動的ルーティングページ : {pid}</p>;
};

export default DynamicRoutePage;

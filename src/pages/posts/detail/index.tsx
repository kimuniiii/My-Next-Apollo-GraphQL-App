import { useRouter } from 'next/router';

import { Template } from 'src/components/organisms/Template';

const PostDetail = () => {
  const router = useRouter();

  return (
    <Template>
      <h1>{router.query.title}</h1>
      <p>投稿詳細ページです</p>
    </Template>
  );
};

export default PostDetail;

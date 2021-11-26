import { useRouter } from 'next/router';

import { CommonTemplate } from 'src/components/templates/CommonTemplate';

const PostDetail = () => {
  const router = useRouter();

  return (
    <CommonTemplate>
      <h1>{router.query.title}</h1>
      <p>投稿詳細ページです</p>
    </CommonTemplate>
  );
};

export default PostDetail;

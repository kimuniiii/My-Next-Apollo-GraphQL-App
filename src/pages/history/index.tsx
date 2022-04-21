import { useRouter } from 'next/router';

const History = () => {
  const router = useRouter();

  const historyBack = () => {
    window.history.back();
  };

  const goToMemoPage = () => {
    router.push('/memo');
  };

  const historyPushState = () => {
    if (typeof window === 'undefined') return;
    const state = { page_id: 1, user_id: 1 };
    const url = new URL(window.location.href);
    url.searchParams.set('foo', 'bar');
    // @ts-ignore
    window.history.pushState(state, '', url);
  };

  const historyPushState2 = () => {
    if (typeof window === 'undefined') return;
    const state = { page_id: 2, user_id: 2 };
    const url = new URL(window.location.href);
    url.searchParams.set('baseball', 'soccer');
    // @ts-ignore
    window.history.pushState(state, '', url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <section style={{ border: '1px solid red' }}>
        <h1>History Back</h1>
        <button type='button' onClick={historyBack}>
          戻るボタン
        </button>
      </section>

      <section style={{ border: '1px solid red' }}>
        <h1>Memo画面へ遷移</h1>
        <button type='button' onClick={goToMemoPage}>
          Memo画面へ遷移ボタン
        </button>
      </section>

      <section style={{ border: '1px solid red' }}>
        <h1>History pushState ?foo=bar を付与する</h1>
        <button type='button' onClick={historyPushState}>
          pushStateボタン
        </button>
      </section>

      <section style={{ border: '1px solid red' }}>
        <h1>History pushState ?baseball=soccer を付与する</h1>
        <button type='button' onClick={historyPushState2}>
          pushStateボタン
        </button>
      </section>
    </div>
  );
};

export default History;

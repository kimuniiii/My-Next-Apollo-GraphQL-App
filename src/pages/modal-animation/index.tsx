import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Box, DivOverlay, DivPlayerOverlay, Modal, Root } from './style';
import { useFade } from '../../hooks/useFade';

export default function ModalAnimation() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const { display: isModalDisplay } = useFade(isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      setIsModalOpen(true);
      return;
    }

    const timeout = setTimeout(() => setIsModalOpen(false), 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isPlayerOpen) {
      setTimeout(() => {
        router.push('/sample-player');
      }, 800);
      return;
    }
  }, [isPlayerOpen]);

  return (
    <Root isModalOpen={isModalOpen}>
      <Box isModalOpen={isModalOpen} onClick={() => setIsModalOpen((prev) => !prev)}>
        <img
          src='https://occ-0-988-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdbbfeeRXFoRm3_JMQvi9K43yzGE7SGp6BzTAXO-OdhIgnodJx7he9CPPZQImA_ea62Dq0PqOjAwpns-m-baUcTg7o2zP5BiUQ6PcUJ0XN4CbFzX2qt9m4d97Gpsj5OYSQ.webp?r=183'
          alt='ワンピース画像'
          width={341}
          height={192}
          style={{ borderRadius: '8px' }}
        />
      </Box>

      {isModalDisplay && (
        <>
          <DivOverlay isModalOpen={isModalOpen} onClick={() => setIsModalOpen(false)} />

          <Modal isModalOpen={isModalOpen} onClick={() => setIsPlayerOpen(true)}>
            <img
              src='https://occ-0-988-993.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQmyEkUE6LnH0F3RNMa_M98zg4sQKs0IJMhLvI6olJqENOmFpkV6caRe9BKHubIHvpwdf8_hszGz6jXv4ezoK44dE_Mt.webp?r=ace'
              alt='ワンピース'
              width={768}
              height={500}
              style={{ cursor: 'pointer', borderRadius: '8px' }}
            />
          </Modal>

          {isPlayerOpen && <DivPlayerOverlay isPlayerOpen={isPlayerOpen} />}
        </>
      )}
    </Root>
  );
}

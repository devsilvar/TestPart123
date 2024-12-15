import { useState } from 'react';
import Portal from './Portals';

const ModalPortal = ({ ModalContent }: { ModalContent: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * This function toggles the state of the modal between open and closed.
   * When called, it will set the state of isModalOpen to the opposite of its
   * current value. If the modal is currently open, it will be closed and vice versa.
   */
  const toggleModal = () => {
    console.log(
      `Toggle modal was called, changing state of isModalOpen from ${isModalOpen} to ${!isModalOpen}`
    );
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={toggleModal}>
        {isModalOpen ? 'Close Modal' : 'Open Modal'}
      </button>

      {isModalOpen && (
        <Portal>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <h2>{ModalContent}</h2>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default ModalPortal;

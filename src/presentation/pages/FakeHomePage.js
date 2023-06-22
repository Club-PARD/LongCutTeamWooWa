import React, { useState } from 'react';
import styled from 'styled-components';
import { TestModal } from '../components/modal/TestModal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function FakeHomePage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(showModal=>!showModal);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>I'm a modal</Button>
        <TestModal showModal={showModal} setShowModal={setShowModal} />
      
      </Container>
    </>
  );
}

export default FakeHomePage;
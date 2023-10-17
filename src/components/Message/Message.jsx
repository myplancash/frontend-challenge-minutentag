import React, { useState } from 'react';
import { MessageContainer, Button, PhoneNumber } from './Message.styles'

export function Message() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <MessageContainer>
      <Button href="#" onClick={toggleParagraph}>
        Want to buy a new car?
      </Button>
      {showParagraph && <PhoneNumber>Call +11 22 33 44 now!</PhoneNumber>}
    </MessageContainer>
  );
}

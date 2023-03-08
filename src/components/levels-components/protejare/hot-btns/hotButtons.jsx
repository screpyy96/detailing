import { useState } from 'react';
import { HiddenText, TextComponent, RedBtn } from './hotButtons.styled';

const HotBtns = ({data}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showText, setShowText] = useState(false);

  return (
    <div>
      {data.dots.map((btn, index) => (
        <RedBtn
          key={index}
          top={btn.top}
          left={btn.left}
          onClick={() => {
            setShowText(!showText);
            setDisplayedText(btn.text);
          }}
        />
      ))}
      <HiddenText show={showText}>
        <TextComponent>{displayedText}</TextComponent>
      </HiddenText>
    </div>
  );
};


export default HotBtns;

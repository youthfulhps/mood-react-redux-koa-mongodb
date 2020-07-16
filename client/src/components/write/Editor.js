import React, { useState } from 'react';
import styled from 'styled-components';

const TitleInput = styled.input`
  background: none;
  font-size: 3rem;
  outline: none;
  border: none;
  caret-color: white;
  color: white;
  border-bottom: 4px solid white;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentInput = styled.textarea`
  background: none;
  outline: none;
  border: none;
  caret-color: white;
  color: white;
  border-bottom: 4px solid white;
  font-size: 2rem;
  margin-top: 2rem;
  width: 100%;

  &::-webkit-scrollbar {
    background: none;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EmojiBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

const EmoJi = styled.div`
  cursor: pointer;
  font-size: 3rem;
  opacity: ${(props) => props.opacity || 0.5};

  &:hover {
    opacity: 1;
    animation: imojiAnimation 0.5s infinite alternate ease-in-out;
  }

  & + & {
    margin-left: 1rem;
  }

  @keyframes imojiAnimation {
    from {
      transform: translate(0%, 0%);
    }
    to {
      transform: translate(0%, -10%);
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;

    & + & {
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;

    & + & {
      margin-left: 0.5rem;
    }
  }
`;

const emojiList = [
  'em em-smiley',
  'em em-angry',
  'em em-worried',
  'em em-tired_face',
  'em em-cry',
];

const Editor = ({ emotion, title, content, onChangeField }) => {
  const [choiceEmoji, setChoiceEmoji] = useState('');

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  const onChangeContent = (e) => {
    onChangeField({ key: 'content', value: e.target.value });
  };

  const onClick = (i) => {
    setChoiceEmoji(i);
    onChangeField({ key: 'emotion', value: i });
  };

  return (
    <>
      <EmojiBlock>
        {emojiList.map((emoji) => (
          <EmoJi
            onClick={() => onClick(emoji)}
            opacity={choiceEmoji === emoji ? 1 : 0.5}
          >
            <i className={emoji} />
          </EmoJi>
        ))}
      </EmojiBlock>
      <TitleInput
        placeholder="오늘 기분은 어땠나요?"
        value={title}
        onChange={onChangeTitle}
      />
      <ContentInput
        placeholder="조금 더 자세히 이야기해줄 수 있나요?"
        rows="5"
        value={content}
        onChange={onChangeContent}
      />
    </>
  );
};

export default Editor;
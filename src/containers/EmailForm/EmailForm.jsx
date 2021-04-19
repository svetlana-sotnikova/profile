import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '../../components';

export const EmailForm = () => {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    axios
      .get('/api/send-message?message=' + data.message)
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (status === 'success') {
    return <p>Сообщение отправлено 👍</p>;
  } else {
    return (
      <Form onSubmit={sendMessage}>
        <Label>
          Ваше сообщение и контакты для связи
          <TextArea autoFocus name="message" required />
        </Label>

        {status === 'error' && <p>Ошибка 👀 Попробуйте еще раз</p>}

        <Button disabled={isLoading} type="submit">
          Отправить
        </Button>
      </Form>
    );
  }
};

const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 40px 0;
`;

const Label = styled.label`
  display: block;
  margin: 15px 0;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  padding: 0.5em 1em;
  box-sizing: border-box;
  margin: 15px 0;
  font: inherit;

  &:focus {
    outline: none;
  }
`;

import styled from '@emotion/styled';
import { Button } from '../../components';

export const EmailForm = () => (
  <Form>
    <Label>
      Ваше сообщение и контакты для связи
      <TextArea name="message" required />
    </Label>

    <Button type="submit">Отправить</Button>
  </Form>
);

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
`;

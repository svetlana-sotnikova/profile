import { styled } from '@compiled/react';
import Head from 'next/head';

export const Main = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Photo></Photo>
    <Container>
      <Info>
        <H1>Front-end разработчик</H1>
        <H2>Светлана Сотникова</H2>

        <Text>
          Разрабатываю сайты на React. Использую Next.js, Styled Components,
          Figma, Photoshop.
        </Text>

        <ContactList>
          <ContactItem style={{ marginLeft: 0 }}>
            <Link href="#">Telegram</Link>
          </ContactItem>

          <ContactItem>
            <Link href="#">GitHub</Link>
          </ContactItem>

          <ContactItem>
            <Link href="#">E-mail</Link>
          </ContactItem>
        </ContactList>

        <Button href="#">Оставить сообщение ✍🏽</Button>
      </Info>
    </Container>
  </>
);

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  /* 
  body {
    margin: 0;
  } */
`;

const Info = styled.div`
  max-width: 640px;
`;

const H1 = styled.h1`
  font-size: 48px;
  margin: 10px 0;
`;

const H2 = styled.h2`
  font-size: 36px;
  margin: 10px 0;
`;

const Text = styled.div`
  margin: 40px 0;
`;

const ContactList = styled.div`
  margin: 40px 0;
`;

const ContactItem = styled.span`
  margin: 0 24px;
`;

const Link = styled.a`
  color: #188837;
  text-decoration: none;
`;

const Button = styled.a`
  display: inline-block;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(180deg, #20b94b 0%, #188837 100%);
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 100px;
  padding: 24px 36px;
`;

const Photo = styled.img`
  background: red;
`;

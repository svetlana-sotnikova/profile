import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import Head from 'next/head';
import { useState } from 'react';
import { Button } from '../../components';
import { EmailForm } from '../EmailForm';
import photo from './photo.png';

export const Main = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  return (
    <>
      <Head>
        <title>Front-end разработчик Светлана Сотникова</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#188837" />
        <meta
          name="description"
          content={
            'Разрабатываю сайты на React.' +
            ' Использую Next.js, Styled Components, Figma, Photoshop.'
          }
        />
        <meta
          name="keywords"
          content="front-end, разработчик, разработка, React, JavaScript"
        />
        <meta name="msapplication-TileColor" content="#188837" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Global
        styles={css`
          body {
            margin: 0;
            font: 24px/1.2 'Inter', sans-serif;
            color: #000;
          }
        `}
      />

      <Container>
        <Photo src={photo} width="380" />

        <Info>
          <H1>Front-end разработчик</H1>
          <H2>Светлана Сотникова</H2>

          <Paragraph>
            Разрабатываю сайты на React. Использую Next.js, Styled Components,
            Figma, Photoshop.
          </Paragraph>

          <ContactList>
            <ContactItem style={{ marginLeft: 0 }}>
              <Link href="https://t.me/svetlana_data">Telegram</Link>
            </ContactItem>

            <ContactItem>
              <Link href="https://github.com/svetlana-sotnikova">GitHub</Link>
            </ContactItem>

            <ContactItem>
              <Link href="mailto:svetlana.data@mail.ru">
                svetlana.data@mail.ru
              </Link>
            </ContactItem>
          </ContactList>

          {isVisibleForm ? (
            <EmailForm />
          ) : (
            <Button
              onClick={() => {
                setIsVisibleForm(true);
              }}
            >
              Оставить сообщение ✍🏽
            </Button>
          )}
        </Info>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1280px) {
    align-items: flex-start;
  }
  @media (max-width: 1023px) {
    padding: 40px 15px;
  }
`;

const Info = styled.div`
  max-width: 580px;

  @media (min-width: 1024px) and (max-width: 1280px) {
    margin: 40px 60px;
  }
`;

const H1 = styled.h1`
  font-size: 48px;
  margin: 10px 0;

  @media (max-width: 375px) {
    font-size: 36px;
  }
  @media (max-width: 1023px) {
    margin-top: 40px;
  }
`;

const H2 = styled.h2`
  font-size: 36px;
  margin: 10px 0;

  @media (max-width: 375px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  margin: 40px 0;
`;

const ContactList = styled.div`
  margin: 40px 0;
`;

const ContactItem = styled.span`
  margin: 0 24px;

  @media (max-width: 767px) {
    display: block;
    margin: 10px 0;
  }
`;

const Link = styled.a`
  color: #188837;
  text-decoration: none;
`;

const Photo = styled.img`
  position: absolute;
  right: -40px;
  bottom: -20px;
  border-radius: 380px;
  z-index: -1;

  @media (max-width: 425px) {
    width: 250px;
  }
  @media (max-width: 1023px) {
    position: static;
  }
`;

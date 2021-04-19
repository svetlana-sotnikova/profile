import axios from 'axios';

export const sendMessage = (token, chatId, text) => {
  return axios.get(
    'https://api.telegram.org/bot' +
      token +
      '/sendMessage?chat_id=' +
      chatId +
      '&text=' +
      encodeURIComponent(text)
  );
};

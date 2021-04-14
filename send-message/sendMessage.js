const axios = require('axios');

module.exports.sendMessage = (token, chatId, text) => {
  axios
    .get(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

import { sendMessage } from '../../src/api/sendMessage';

export default function handler(req, res) {
  return sendMessage(
    process.env.TG_BOT_TOKEN,
    process.env.TG_BOT_CHAT,
    req.query.message
  )
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch(() => {
      res.status(400).json({ success: false });
    });
}

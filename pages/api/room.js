
// pages/api/room/[id].js
import axios from 'axios';

const FLASK_API_URL = process.env.FLASK_API_URL // URL of your deployed Flask API

export default async function handler(req, res) {
  const { query: { id }, method } = req;

  if (method === 'GET') {
    try {
      const response = await axios.get(`${FLASK_API_URL}/room/${id}`);
      console.log(response)
      res.status(200).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

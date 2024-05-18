// pages/api/temperature.js
import axios from 'axios';

const FLASK_API_URL = 'http://localhost:5000/api'; // URL of your Flask API

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    try {
      const response = await axios.post(`${FLASK_API_URL}/temperature`, req.body);
      res.status(201).json(response.data);
    } catch (error) {
      res.status(error.response.status).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

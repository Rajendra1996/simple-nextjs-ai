
import axios from 'axios';

export default async function handler(req, res) {

  if (method === 'GET') {
    try {
      const response = {"msg": "Success Access"}
      res.status(200).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}

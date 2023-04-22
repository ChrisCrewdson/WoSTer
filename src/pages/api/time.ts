import {NextApiRequest, NextApiResponse} from 'next';
import {connectToDatabase} from '../../utils/mongodb';
import {TimeData} from '@/types/time';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const time: TimeData = req.body;

    if (!time) {
      return res.status(400).json({error: 'Invalid time data'});
    }

    try {
      const {db} = await connectToDatabase();
      const collection = db.collection('time');
      await collection.insertOne({time});

      res.status(201).json({message: 'Time saved to database'});
    } catch (error) {
      console.error('Failed to save time to database:', error);
      res.status(500).json({error: 'Failed to save time to database'});
    }
  } else {
    res.status(400).json({error: 'Invalid request method'});
  }
}

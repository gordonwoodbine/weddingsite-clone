import dbConnect from '../../../lib/dbConnect';
import Guest from '../../../lib/models/Guest';

export default async function handler(req, res) {
  const { method, body: data } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const guests = await Guest.find({});
        res.status(200).json({
          success: true,
          data: guests,
        });
      } catch (err) {
        res.status(400).json({
          success: false,
          message: 'Failed to fetch records',
        });
      }
      break;
    case 'POST':
      try {
        const guest = await Guest.create(data);
        res.status(201).json({
          success: true,
          data: guest,
        });
      } catch (err) {
        console.log(err);
        res.status(400).json({
          success: false,
          message: 'Something went wrong saving the data to the database',
        });
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: 'Incorrect http method used. Accept GET or POST only',
      });
  }
}

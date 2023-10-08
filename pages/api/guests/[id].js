import dbConnect from '../../../lib/dbConnect';
import Guest from '../../../lib/models/Guest';

export default async function handler(req, res) {
  const { method, query, body: data } = req;
  const { id } = query;
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const guest = await Guest.findById(id);
        res.status(200).json(guest);
      } catch (err) {
        res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      break;
    case 'DELETE':
      try {
        await Guest.deleteOne({ _id: id });
        res.status(204).end();
      } catch (err) {
        res.status(400).json({
          success: false,
          message: err.message,
        });
      }
      break;
    case 'PUT':
      try {
        const guest = await Guest.findOneAndUpdate({ _id: id }, data);
        res.status(201).json(guest);
      } catch (err) {
        res.status(400).json({
          success: false,
          message: err.message,
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

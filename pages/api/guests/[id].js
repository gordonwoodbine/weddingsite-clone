import dbConnect from '../../../lib/dbConnect';
import Guest from '../../../lib/models/Guest';

export default async function handler(req, res) {
  const { id } = req.query;
  await dbConnect();

  try {
    const guest = await Guest.findById(id);
    res.status(200).json({
      success: true,
      data: guest,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
}

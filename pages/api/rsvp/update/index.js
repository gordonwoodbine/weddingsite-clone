import jwt from 'jsonwebtoken';
import dbConnect from '../../../../lib/dbConnect';
import Guest from '../../../../lib/models/Guest';

export default async function handler(req, res) {
  const { method, body: data } = req;
  const { token, ...updatedData } = data;
  await dbConnect();

  if (!token) {
    res.status(403).json({
      success: false,
      message: 'A token is required for authentication',
    });
  }

  try {
    const decoded = jwt.verify(token, 'iamanawfulsecret');
    const { user } = decoded;
    const guest = await Guest.findOneAndUpdate(
      {
        rsvpCode: user,
      },
      updatedData
    );

    res.status(200).json({
      success: true,
      message: 'Details recorded',
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
}

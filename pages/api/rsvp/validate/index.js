import jwt from 'jsonwebtoken';
import dbConnect from '../../../../lib/dbConnect';
import Guest from '../../../../lib/models/Guest';

const opts = {
  expiresIn: '24h',
};

export default async function handler(req, res) {
  const { method, body: data } = req;
  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const guest = await Guest.findOne({
          rsvpCode: data,
        });
        if (guest) {
          jwt.sign(
            { user: data },
            'iamanawfulsecret',
            opts,
            function (err, token) {
              res.status(200).json({
                success: true,
                token,
                guest,
              });
              return;
            }
          );
        } else {
          res.status(404).json({
            success: false,
            message: 'Not found',
          });
        }
      } catch (err) {
        console.log(err);
      }
      break;
    default:
      res.status(400).json({
        success: false,
        message: 'Wrong HTTP method - only POST accepted',
      });
  }
}

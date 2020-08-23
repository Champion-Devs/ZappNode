const { mailgun, email } = require('../config/mailgun');
const User = require('../models/user');

module.exports = async (req, res) => {
  try {
    const { message, monitor_id } = req.body;

    // find monitor owner
    const user = await User.findOne({
      monitors: { $elemMatch: { _id: monitor_id } },
    });

    if (user) {
      const members_ids = user.members;

      const members_emails = [];

      // find members and store their emails
      for (const id of members_ids) {
        const member = await User.findById(id);
        members_emails.push(member.email);
      }

      let data = {
        from: email,
        to: user.email,
        cc: members_emails,
        subject: message.subject,
        text: message.body,
      };

      // send Email
      mailgun.messages().send(data, function (err, body) {
        if (err) {
          throw new Error('Something happened with Mail gun');
        } else {
          console.log(body);
          res.status(200).json({
            msg: 'success',
          });
        }
      });
    } else {
      res.status(404).json({
        msg: 'user not found',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: error,
    });
  }
};

const AWS = require('aws-sdk');
const SES = new AWS.SES();

exports.handler = async (event) => {
  console.log('event', event);

  const email = event.Input.Payload.Item.email;

  const message = `Hi, 
  We saw that signed for our gaming platform but haven't played yet.
  We hope you play soon`;

  const params = {
    Source: 'nir.gluzman@gmail.com',
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Subject: { Data: 'Remember to use the gaming platform' },
      Body: {
        Text: { Data: message },
      },
    },
  };

  try {
    await SES.sendEmail(params).promise();
    return;
  } catch (error) {
    console.error('error sending Email', error);
    throw error;
  }
};

const { v4 } = require('uuid');

const DynamoDB = require('../common/DynamoDB');

const tableName = process.env.signupTableName;

exports.handler = async (event) => {
  console.log('event', event);

  const email = event.Input.signup.email;
  const ID = v4();

  await DynamoDB.write(tableName, { ID, email, played: 'false' });

  return { ID };
};

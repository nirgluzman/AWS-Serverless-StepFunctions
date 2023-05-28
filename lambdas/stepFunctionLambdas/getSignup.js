const DynamoDB = require('../common/DynamoDB');

const tableName = process.env.signupTableName;

exports.handler = async (event) => {
  console.log('event', event);

  const ID = event.Input.Payload.ID;

  const response = await DynamoDB.get(tableName, ID);

  return response;
};

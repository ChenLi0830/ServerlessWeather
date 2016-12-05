'use strict';

module.exports.currentTemperature = (event, context, callback) => {

  const response = {
    statusCode: 200,
    header: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      temperature: 30,
      locationId: event.queryStringParameters.id,
      input: event
    })
  };

  callback(null, response);
};
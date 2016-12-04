'use strict';

module.exports.currentTemperature = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      temperature: 30,
      locationId: event.id,
      input: event
    })
  };

  callback(null, response);
};
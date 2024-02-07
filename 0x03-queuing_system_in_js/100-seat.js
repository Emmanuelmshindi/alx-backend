const redis = require('redis');
const { promisify } = require('util');

function reserveSeat(number) {
  const obj = {};
  obj[available_seats] = value;
};

const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);

async function getCurrentAvailableSeats() {
  try {
    await setAsync('available_seats', 50);

    await setAsync('reservation_enabled', true);

    console.log('Number of available set to 50 and reservationEnabled set to true.');
  } catch(error) {
    console.error('Error retrieving seats:', error);
    throw error;
  };
};

const queue = require('kue')

import redis from 'redis';

const client = redis.createClient({
  port: 6379,
  host: "127.0.0.1"
});

client.on('connect', () => {
  console.log("Redis client connected to the server");
});

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    redis.print(`Reply: ${result}`);
  });
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`${result}`);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

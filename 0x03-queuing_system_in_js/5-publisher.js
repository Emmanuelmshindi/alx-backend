import { createClient, print } from 'redis';

const client = createClient({
  port: 6379,
  host: "127.0.0.1"
});

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

client.on('connect', () => {
  console.log("Redis client connected to the server");
});

function publishMessage(message, time) {
  setTimeout(() => {
    console.log("About to send MESSAGE");
    client.pubish('holberton school channel', message);
  }, time);
};

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);

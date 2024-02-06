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

const subscriber = redis.createClient({
  port: 6379,
  host: "127.0.0.1"
});

subscriber.on('connect', () => {
  console.log("Redis subscriber connected to the server");
});

subscriber.on('error', (err) => {
  console.log(`Redis subscriber not connected to the server: ${err.message}`);
});

subscriber.subscribe('holberton school channel');

subscriber.on('message', (channel, message) => {
  console.log(message);

  if (message == 'KILL_SERVER') {
    subscriber.unsubscribe('holberton school channel');
    subscriber.quit();
  }
});

const queue = require('kue');

const sendNotification = (phoneNumber, message) => {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

queue.process('push_notification_code', function(job, done) {
  sendNotification(phoneNumber, message);
});

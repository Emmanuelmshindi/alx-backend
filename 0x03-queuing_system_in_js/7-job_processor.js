const kue = require('kue');

const blacklistedNumbers = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
  let progress = 0;

  if (blacklistedNumbers.includes(phoneNumber)) {
    const error = new Error(`Phone number ${phoneNumber} is blacklisted`);
    job.failed().error(error);
    done(error);
  } else {
    job.progress(50, 100);
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`)

  setTimeout(() => {
    done();
  }, 1000);
}
}

const pushNotificationQueue = kue.createQueue({
  prefix: 'push_notification_code_2',
  redis: {
    host: 'localhost',
    port: 6379
  }
});

pushNotificationQueue.process('push_notification_code_2', 2, function(job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});

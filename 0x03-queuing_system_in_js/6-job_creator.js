const kue = require('kue');
const queue = kue.createQueue();

const obj = {
  phoneNumber: string,
  message: string,
}

const push_notification_code = kue.createQueue();

const job = push_notification_code.create('message', obj
).save(function(err) {
  if (!err) console.log('Notification job created:', job.id);
});

job.on('complete', (result) => {
  console.log('Notification job completed');

}).on('failed attempt', (errorMessage, doneAttempts) => {
  console.log('Notification job failed');
});

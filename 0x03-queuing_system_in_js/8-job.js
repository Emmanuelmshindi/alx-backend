const kue = require('kue');

function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    const error = new Error('Job is not an array');
  }
  jobs.forEach(function(jobData) {
    const job = queue.create('push_notification_code_3', jobData).save(function(err) {
      if (err) {
        console.error('Error creating job:', err);
        return;
      }
      console.log('Notification job created:', job.id);
    });

    job.on('complete', function(result) => {
      console.log(`Notification job ${job.id} completed`);

    }).on('failed', function(errorMessage) {
      console.log(`Notification job ${job.id} failed: ${errorMessage}`);

    }).on('progress', function(progress, data) {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
  });
};

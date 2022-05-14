exports.handler = async (event) => {
  const currentDate = new Date().toLocaleString('en-AU');

  console.log('environment:', process.env.ENVIRONMENT);

  console.log(`=== LOGGING INFO AT ${currentDate}`, { myObj: { info: 'SUCCESS' } });

  console.warn(`=== LOGGING WARN AT ${currentDate}`, { myObj: { warn: 'WARN' } });

  console.error(`=== LOGGING ERROR AT ${currentDate}`, { myObj: { error: 'ERROR' } });

  console.log('event', event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      env: process.env.ENVIRONMENT,
      message: `Hello from local lambda at ${currentDate}`,
      event,
    }),
  };
};

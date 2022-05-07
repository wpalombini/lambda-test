exports.handler = async (event) => {
  const currentDate = new Date().toLocaleString('en-AU');

  console.log(`=== LOGGING INFO AT ${currentDate}`, { myObj: { info: 'success' } });

  console.warn(`=== LOGGING WARN AT ${currentDate}`, { myObj: { warn: 'WARN' } });

  console.error(`=== LOGGING ERROR AT ${currentDate}`, { myObj: { warn: 'ERROR' } });

  return {
    statusCode: 200,
    body: JSON.stringify(`Hello from local lambda at ${currentDate}`),
  };
};

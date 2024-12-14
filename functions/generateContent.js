// netlify/functions/generateContent.js
exports.handler = async (event, context) => {
  // event contains info about the incoming request
  // context contains info about the function environment

  // For now, just return a simple response to confirm it works
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Netlify Functions!" })
  };
};

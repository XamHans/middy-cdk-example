import middy from '@middy/core';
import { loggerMiddleware } from './logger';
import { validatorMiddleware } from './validator';

const businessLogicHandler = async function(event) {
  console.log("handler doing business stuff");
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `This is our handler that ONLY takes care of our business logic`
  };
};

// Wrap the handler with middy and use the middlewares
const handler = middy(businessLogicHandler)
  .use(loggerMiddleware())
  .use(validatorMiddleware());

export { handler };

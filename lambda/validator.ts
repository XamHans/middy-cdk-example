//A middleware is an object that should contain at least 1 of 3 possible keys:
// before: a function that is executed in the before phase
// after: a function that is executed in the after phase
// onError: a function that is executed in case of errors
// before, after and onError functions need to have the following signature:
const validatorMiddleware = () => {
  const before = async (request) => {
    console.log('Validating event:', request.event);
    if (!request.event.body) {
      throw new Error('Missing body in event');
    }
  };

  return {
    before
  };
};

export { validatorMiddleware };

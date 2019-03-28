const errorsVocabluary = {
  'Failed to fetch': 'internal error, sorry',
};

const processError = (error) => {
  if (error.networkError) {
    const message = error.networkError.message;
    if (errorsVocabluary[message]) {
      return errorsVocabluary[message];
    }
    return error.networkError.message;
  }
  if (error.graphQLErrors && error.graphQLErrors.length) {
    return error.graphQLErrors.map((err) => err.message).join(', ');
  }
  return error.message;
};

export default processError;

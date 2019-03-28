// https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
export const validatePassword = (password) => {
  const regexp = new RegExp(`^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{${6},})`);
  const test = regexp.test(password);
  return test;
};

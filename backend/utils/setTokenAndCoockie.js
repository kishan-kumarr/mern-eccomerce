//* set token and coockie
const setTokenAndCoockie = (user, statusCodes, res) => {
  /* Creating a token for the user. */
  const token = user.getJWTToken();

  // options for coockie
  options = {
    expires: new Date(
      Date.now() + (process.env.COOCKIE_EXPIRE || 5) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res
    .status(statusCodes)
    .cookie("token", token, options)
    .json({ status: true, token, user });
};

module.exports = setTokenAndCoockie;

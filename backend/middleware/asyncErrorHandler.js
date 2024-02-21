module.exports = (asyncErrorHaandlerFunc) => (req, res, next) => {
  Promise.resolve(asyncErrorHaandlerFunc(req, res, next)).catch(next);
};

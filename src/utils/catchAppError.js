const catchAppError = (err, req, res, next) => {
    if (err.code === 'ERR_ENTITY_NOT_FOUND') {
      res.status(404).send('Something failed')
    } else {
      next(err);
    }
  };
  
  module.exports = catchAppError;
module.exports = function response(
    res,
    {
      success = true,
      message = '',
      data = {}
    } = {}
  ) {
    if (success) {
      return res.status(200).json({
        status: 'success',
        message,
        data
      })
    } else {
      return res.status(400).json({
        status: 'error',
        message
      })
    }
  }
  
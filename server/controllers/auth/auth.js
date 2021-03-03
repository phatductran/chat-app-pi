const User = require('../../models/User')

exports.login = async function(req, res, next) {
  const {email, password} = req.body

  if (!email || !password) {
    return res.status(400).json()
  }

  try {
    
  } catch (error) {
    
  }
}
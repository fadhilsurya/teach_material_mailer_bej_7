const router = require('express').Router()
const { sendEmail } = require('../../controller/user.controller')

router.post('/email', sendEmail)


module.exports = router
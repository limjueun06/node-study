const express = require('express')
const router = express.Router()
const path = require('path')
const file_path = path.join(__dirname, '..', 'public')

router.get('/', (req, res)=>{
    console.log('서버 접근!')
    res.sendFile(file_path + '/user.html')
})

module.exports = router
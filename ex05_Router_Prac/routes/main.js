const express = require('express')
const router = express.Router()
const path = require('path')
const file_path = path.join(__dirname, '..', 'public') // 기본경로지정

router.get('/', (req, res)=>{
    console.log('서버 접근!')
    res.sendFile(file_path + '/main.html')
})

module.exports = router
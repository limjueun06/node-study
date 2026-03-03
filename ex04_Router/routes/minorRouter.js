const express = require('express')
const router = express.Router()

const path = require('path')
const file_path = path.join(__dirname, '..', 'public')

router.get('/', (req,res)=>{
    console.log('마이너 페이지')
    res.sendFile(file_path + '/minor.html')
})

router.get('/fishing', (req,res)=>{
    console.log('낚시 페이지')
    res.sendFile(file_path + '/fishing.html')
})

router.get('/shooting', (req,res)=>{
    console.log('사격 페이지')
    res.sendFile(file_path + '/shooting.html')
})

// 설계된 내용을 server.js에서 사용 할 수 있도록 추출!
module.exports = router
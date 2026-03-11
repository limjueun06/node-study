const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    console.log('누군가 내 서버에 접속했습니다.')
    res.render('index')
})

module.exports = router;
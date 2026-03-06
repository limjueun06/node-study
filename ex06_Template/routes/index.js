const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log('서버접근')
    // 기본 경로가 요청되면 템플릿 엔진을 사용하여 페이지 응답!
    res.render('main', {nick : '임주은'})
})

router.get('/mypage', (req, res)=>{
    console.log("마이페이지")
    res.render("mypage")
})

module.exports =router
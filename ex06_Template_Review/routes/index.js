const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    console.log('서버접근')
    // 기본 경로가 요청되면 템플릿 엔진을 사용하여 페이지 응답!
    res.render('main', {nick : '임주은'})
})

router.post('/login', (req, res) => {
    // <input name="user_nick"> 에 적힌 값을 가져옵니다.
    const inputNick = req.body.user_nick;
    
    console.log('입력받은 닉네임:', inputNick);
    
    // 다시 main 페이지를 그리면서, 입력받은 값을 데이터로 보냅니다.
    res.render('main', { nick: inputNick });
});

router.get('/mypage', (req, res)=>{
    console.log("마이페이지")
    res.render("mypage")
})

module.exports =router
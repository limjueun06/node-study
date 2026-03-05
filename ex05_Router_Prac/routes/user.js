const express = require('express')
const router = express.Router()
const path = require('path')
const file_path = path.join(__dirname, '..', 'public')

// localhost:3000/ -> localhost:3000(/) -> main.html
// localhost:3000/user -> localhost:3000/user(/) -> user.html

router.get('/', (req, res)=>{
    console.log('user서버 접근!')
    res.sendFile(file_path + '/user.html')
})

// 라우트 매개변수를 사용한 요청값 처리하기
// 라우트 매개변수 : 라우트 주소에 자주 쓰이는 패턴 중 하나! (와일드 카드 역할!)
// router.get('/user/:data값')
// router.get('/:data값') -> localhost:3000/user/채수민
// => /:data값 == 채수민
// ※사용시 주의사항! => 라우트 매개변수를 사용한다면 요청에 대한 코드는
//                   일반 라우트 아래에 작성해야 한다! (코드의 흐름 아래방향으로)

router.get('/:name', (req, res)=>{
    console.log('특정 유저에 대한 요청이 진행됨!', req.params.name)
    res.send(req.params.name + '님 환영합니다.')
})

module.exports = router
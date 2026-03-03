// 1. express 불러오기 -> 사용 할 수 있도록 기능 만들기
    const express = require('express')
    const app = express()


// 라우팅(Routing)
// URL 및 특정 요청에 대해 응답하는 방법을 결정하는 기능!

// 일반 라우팅 : app.get('/'), app.post('/postLogin')
// 라우팅해야 할 내용이 많아지면 코드가 복잡해지는 문제가 발생!
// 기능별, 유형별 라우팅을 따로 모듈화 하여 사용한다! => routes폴더에 관리

// 3. 내가 만든 나의 router 모듈 가져오기!
const mainRouter = require('./routes/mainRouter')
const minorRouter = require('./routes/minorRouter')

// 4. express가 가지고 있는 미들웨어를 사용하여 라우터 연결!
app.use('/', mainRouter)
app.use('/minor', minorRouter) // => /minor


// 2. port번호 셋팅하기
    app.set('port', process.env.PORT || 3000)
    app.listen(app.get('port'), ()=>{
        console.log(app.get('port')+'번 포트에서 대기중')
    })
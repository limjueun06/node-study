// 포트번호 3000으로 기본 셋팅 진행!
// express 꼭 불러오기!

const express = require('express')
const app = express()

// 라우팅 관련 기술이 들어오는 영역!
const mainRouter = require('./routes/main')
const userRouter = require('./routes/user')
const menuRouter = require('./routes/menu')

app.use('/', mainRouter)
app.use('/user', userRouter) // -> user.html
app.use('/menu', menuRouter) // -> menu.html


app.set('port', process.env.PORT || 3000)
    app.listen(app.get('port'), ()=>{
        console.log(app.get('port')+'번 포트에서 대기중')
    })
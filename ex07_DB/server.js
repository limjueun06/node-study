const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views', {
    express : app,
    watch : true
})

// 미들웨어 사용을 지정하는 부분 => 라우터 사용시, post 데이터 사용시!
app.use(express.urlencoded({extended:true})) // post 해석 도구
app.use('/', indexRouter)
app.use('/user', userRouter)


app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + '번 포트에서 대기중')
})
const express = require('express')
const app = express()

const indexRouter = require('./routes/index')

// ** Nunjucks 사용법
// 1. npm i nunjucks chokidar (터미널에서 실행)
// 2. 해당 기능 불러오기
const nunjucks = require('nunjucks')

// 3. view엔진을 html 확장자로 사용하겠다 하는 설정!
app.set('view engine', 'html')

// 4. nunjucks 사용에 대한 설정!
//    => 필요한 파일들만 html로 변환해서 사용하겠다!
//       - 1번째 인자 : 사용할 폴더명 지정 (views)
//       - 2번째 인자 : nunjucks 옵션 객체 
//         => express : express가 담긴 객체를 연결해서 사용하겠다! 의미 
//         => watch : html파일의 변경을 바로 인지하고 렌더링 할 수 있도록 연결 하겠다! 의미
nunjucks.configure('views',{
    express : app,
    watch : true
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter)

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + '번 포트에서 대기중')
})
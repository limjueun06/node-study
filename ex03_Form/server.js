// 모듈을 불러오겠다.
const express = require('express')

// 불러온 express 모듈 실행하기
const app = express()

// path에 해당하는 모듈 불러오기
const path = require('path')


// 4. post의 데이터를 꺼내와 해석하기 위한 미들웨어 추가!
app.use(express.urlencoded({ extended : true }))

// 1. 메인경로에 접속 할 수 있는 구조 만들기
app.get('/', (req, res)=>{
    // 서버 요청에 대한 응답을 연결해보기! => html파일을 생성해서 작업!
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// 2. get방식의 요청을 받을수 있는 구조 생성!
app.get('/getKeyword', (req, res)=>{
    console.log('사용자가 검색을 요청했습니다!', req.query.keyword)

    // 웹브라우저에 응답 연결하기
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    res.write('<p>' + req.query.keyword + '를 검색했습니다. </p>')
    res.end()
})

// 3. post방식의 요청을 받을 수 있는 구조 생성! => 데이터를 가져오기 위한 미들웨어를 추가해야한다!
app.post('/postLogin', (req, res)=>{
    console.log('로그인 시도', req.body)

    // 로그인 로직을 만들어 응답해 보자!
    // public 폴더 loginS.html / loginF.html
    // admin/1234 으로 로그인 성공시 => loginS.html 로 응답
    // 로그인 정보가 틀렸을 경우 => loginF.html 로 응답

    // 웹브라우저에 응답 연결하기
    // req.body.id , req.body.pw
    if(req.body.id === 'admin' && req.body.pw === '1234') {
        res.sendFile(path.join(__dirname, 'public', 'loginS.html'))
    }
    else{
        res.sendFile(path.join(__dirname, 'public', 'loginF.html'))
    }
})


// 컴퓨터의 기본 포트번호를 확인해서 연결하는 방법
app.set('port', process.env.PORT || 3000)

// 포트번호 설정
app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + '포트에서 대기중..')
})




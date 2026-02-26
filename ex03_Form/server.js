// 모듈을 불러오겠다.
const express = require('express')

// 불러온 express 모듈 실행하기
const app = express()

// path에 해당하는 모듈 불러오기
const path = require('path')


// 1. 메인경로에 접속 할 수 있는 구조 만들기
app.get('/', (req, res)=>{
    // 서버 요청에 대한 응답을 연결해보기! => html파일을 생성해서 작업!
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// 2. get방식의 요청을 받을수 있는 구조 생성!
app.get('/getKeyword', (req, res)=>{
    console.log('사용자가 검색을 요청했습니다!', req.query.keyword)
})

// 컴퓨터의 기본 포트번호를 확인해서 연결하는 방법
app.set('port', process.env.PORT || 3000)

// 포트번호 설정
app.listen(app.get('port'), ()=>{
    console.log(app.get('port') + '포트에서 대기중..')
})




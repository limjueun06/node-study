// 그동안 우리는 서버를 사용하기 위해 live server를 사용해왔다.
// 그러나! 이제부터는 우리가 직접 server를 생성해서 사용해보자.

// 서버 생성시 필수적인 조건!
// 1. http 모듈 -> 웹 브라우저에서 요청과 응답을 처리해주는 모듈 (core)
// 2. 포트 번호 -> 다른 사용중인 포트번호와는 중복되면 안됨
// 3. createServer 함수 내 콜백함수 
//     -> 누군가가 내 서버에 접근을 하면 내가 어떤일을 할건지 알려주는 기능


// http 모듈 불러오기
const http = require('http')

// http를 통해 필요한 작업 불러오기
http
.createServer((req, res)=>{
    console.log('서버 접근 완료!!')
    
    // 서버에 접속된 IP 주소 확인해보기!
    // console.log('ip : ', req.socket.remoteAddress )

    // IP주소를 조금 더 깔끔하게 가져와보자!
    const ogIp = req.socket.remoteAddress

    if(ogIp.startsWith('::ffff:')){
        const ip = ogIp.substring(7)
        console.log('ip : ', ip)

        if(ip == "192.168.219.194"){
            res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
            res.write('<h1>은혜씨 안녕하세요!</h1>')
            res.end()
        } // inner if end
        else if(ip == "192.168.219.42"){
            res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
            res.write('<h1>수민쌤 안녕하세요!</h1>')
            res.end()
        } // inner else if end
        else{
            res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
            res.write('<h1>임주은의 홈페이지 입니다</h1>')
            res.end()
        } // inner else end
    } // outer if end

    // 한글에 대한 응답은 인코딩 작업이 필요하다!
    // 서버에 접속한 사용자에게 보일수 있는 응답(res) 처리!!
    // res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
    // 한글을 출력하기 위해서 추가된 코드
    // text/html; HTML 문서로 반환하기 때문에 태그도 작성가능하다.
    // res.write('<h1>안녕하세요!</h1>')
    // res.end() // 응답에 대한 종료 필요!!
})
.listen(3000, ()=>{
    console.log('3000번 포트에서 서버연결을 기다리는중...')
})

/* 세션 (Session)
    - 서버가 클라이언트에게 암호화된 ID를 부여 -> session id
    - 클라이언트가 가지고 있는 ID와 서버가 가지고 있는 session ID를
      비교해서 확인하는 원리
        * session은 그래서 id라는 속성 값을 쓸 수 없음
    - 세션과 쿠키의 다른점?
        (1) 세션은 서버의 자원을 사용, 너무 많이 쓰면 서버부담
        (2) 브라우저가 종료되면 세션은 자동삭제
    - 우리는 file Store를 이용해서 새 파일에 session 정보를 저장
*/
const express = require('express')
const router = express.Router()

// 1. 세션 등록
router.get('/setSession', (req,res)=>{

    // req.session.속성 = "값"
    // 사용자 -> 관리자 : req

    req.session.userId = 'seonzeti'
    req.session.userName = '선영표'
    req.session.isLogined = true

    // ★ session은 반드시 save 작업 진행
    req.session.save((err)=>{
        if(err){
            res.send('세션 저장 중 오류가 발생')
        } else {
            res.send('세션이 등록되었습니다.')
        }

    })
})

// 2. 세션 확인
router.get('/getSession', (req,res)=>{
    if(req.session.isLogined){
        res.send('반갑습니다.'+req.session.userName+'님')
    } else {
        res.send('로그인이 필요한 서비스입니다.')
    }
})

// 3. 세션 삭제
router.get('/clearSession', (req,res)=>{
    
    req.session.destroy((err)=>{
        if(err){
            res.send('세션 삭제 중 오류가 발생했습니다.')
        }
    })

    res.clearCookie()       // 사용자의 자유이용권도 뺏어야함!
    res.send('로그아웃 완료!')

})


module.exports = router;
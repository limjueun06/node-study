// 사용자의 데이터만 관리하는 용도로 사용!(로그인, 회원가입, 탈퇴, ...)

const express =require('express')
const router = express.Router()

// DB에 필요한 모듈 불러오기
const conn = require('../config/db')

// 회원가입 기능 만들기
router.post('/join', (req, res)=>{
    console.log('회원가입 기능', req.body)

    // DB에 데이터 전달 작업!
    let {id, pw, nick} = req.body
    console.log('id', id)

    // 1. sql 문장이 필수로 필요하다
    // 2. 전달할 데이터 값
    // 3. DB에 작업을 진행한 후 처리할 콜백함수
    let sql = "INSERT INTO NODEJS_MEMBER VALUES(?,?,?)"
    conn.query(sql, [id, pw, nick], (err, rows)=>{
        console.log('회원가입 완료', rows)

        if(rows){
            // 회원가입이 잘 처리 됐다면
            res.redirect('/')
        }else{
            // 회원가입이 처리되지 않았다면
            res.send(`
                    <script>
                        alert('다시시도해주세요')
                        window.location.href='/join'
                    </script>
                `)
        }

    }) // 1,2,3번 에 대한 내용이 여기에 들어감.

})

// 추가적 구성 기능
// 로그인 기능
// 회원 탈퇴 기능
// 검색기능

module.exports = router
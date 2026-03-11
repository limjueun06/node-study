// 쿠키 (cookie) : 클라이언트 브라우저에 저장되는 정보
// - 쿠키는 서버의 자원을 전혀 사용하지 않고, 클라이언트의 자원인 브라우저를 사용함
// - 놀이공원에서 자유이용권을 손님만 가지고 다니는 개념
// - 쿠키는 브라우저에 저장이 되기 때문에 브라우저를 종료하더라도 그 기록이 남아있음

const express = require('express')
const router = express.Router()

// 1. 쿠키 저장하기
router.get('/setCookie', (req,res)=>{
    console.log(('setCookie'));

        // 쿠키저장 : 관리자 -> 사용자에게 자유이용권을 전달(res)
        // res.cookie(key, value)
        res.cookie('nick', 'seonzeroticket')

        // 쿠키의 만료 설정 -> 새로고침시 사라진다, 3000->3초
        res.cookie('age', '20', {maxAge : 3000})

        // 시간으로 만료 설정
        res.cookie('name', '선영표', {
            expires : new Date(Date.now() + 60*60*24*3)
                                                        })
        res.redirect('/')
})

// 2. 쿠키 값 확인하기
router.get('/getCookie', (req,res)=>{
    // 쿠키확인 : "자유이용권 보여주세요", 사용자-> 관리자(req)
    console.log('쿠키 값 확인하기', req.cookies.nick)
    console.log('쿠키 값 확인하기', req.cookies.age)
    console.log('쿠키 값 확인하기', req.cookies.name)
    res.redirect('/')
})

// 3. 쿠키 값 삭제하기
router.get('/clearCookie', (req,res)=>{
    // 쿠키삭제 : 자유이용권을 뺏는것, 관리자 -> 사용자 (res) 
    res.clearCookie('nick')
    res.redirect('/')
})

module.exports = router ;
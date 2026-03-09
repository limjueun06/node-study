const express = require('express')
const router = express.Router()

// 메인페이지
router.get('/', (req, res)=>{
    console.log('서버 접속')
    res.render('main')
})

// 회원가입 페이지
router.get('/join', (req, res)=>{
    console.log('회원가입 페이지')
    res.render('join')
})

// 로그인 페이지 -> /login
router.get('/login', (req,res)=>{
    console.log('로그인 페이지')
    res.render('login')
})

// 회원탈퇴 페이지 -> /delete
router.get('/delete', (req,res)=>{
    console.log('회원탈퇴 페이지')
    res.render('delete')
})

// 검색 페이지 -> /search
router.get('/search', (req,res)=>{
    console.log('회원검색 페이지')
    res.render('search')
})

module.exports = router
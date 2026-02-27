// 인기 스포츠 페이지를 여는 라우팅만 모아두는 파일

// 1. 필요한 모듈 불러오기
// router는 express를 통해서 가져온다.
const express = require('express')
const router = express.Router() 
const path = require('path')
// 현재 내가 있는 파일은 routes폴더에 -> public으로 가겠다
const file_path = path.join(__dirname, '..', 'public')

// 2. 메인 페이지를 연결하기 위한 작업 시작!
router.get('/', (req, res)=>{
    console.log('인기 스포츠 페이지')
    res.sendFile(file_path + '/main.html')
})


// 3. (반드시 사용!!!) 만들어진 기능을 추출하기 위한 작업!
module.exports = router
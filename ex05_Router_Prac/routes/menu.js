const express = require('express')
const router = express.Router()
const path = require('path')
const file_path = path.join(__dirname, '..', 'public')

router.get('/', (req, res)=>{
    console.log('menu서버 접근!')
    res.sendFile(file_path + '/menu.html')
})

router.get('/:type', (req, res)=>{
    console.log('메뉴 접근!', req.params.type)

    // 각각의 타입에 따른 html 구조의 응답을 연결해보자!
    // => 실제 html 파일 생성은 하지않고!

    if(req.params.type === '메인'){
        // 메인에 해당하는 메뉴를 table태그를 사용해 응답!
        res.send(`
            <h1>${req.params.type} 메뉴판</h1>
            <table border="1">
                <tr>
                    <td>김치 볶음밥</td>
                    <td>새우 볶음밥</td>
                </tr>
            </table>
        `)
    }else if(req.params.type === '사이드'){
        // 사이드에 해당하는 메뉴를 table로 응답!
        res.send(`
            <h1>${req.params.type} 메뉴판</h1>
            <table border="1">
                <tr>
                    <td>탕수육</td>
                    <td>꿔바로우</td>
                </tr>
            </table>
        `)
    }else{
        // 음료에 해당하는 메뉴를 table로 응답!
         res.send(`
            <h1>${req.params.type} 메뉴판</h1>
            <table border="1">
                <tr>
                    <td>사이다</td>
                    <td>콜라</td>
                </tr>
            </table>
        `)
    }
})

module.exports = router
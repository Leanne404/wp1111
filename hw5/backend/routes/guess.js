import express from 'express'
import {genNumber} from '../core/getNumber'

const router = express.Router()

router.post('/start', (_, res) => {
    genNumber() // 用亂數產生一個猜數字的 number，存在 memory DB 
    res.json({ msg: 'The game has started.' })
})

router.get('/guess', (req, res) => {
// 去 (memory) DB 拿答案的數字
// 用 req.query.number 拿到前端輸入的數字
    let guessNum = req.query.number
// check if NOT a num or not in range [1,100]
    if(guessNum > 100 || guessNum < 1){
        res.status(406).send({ msg: 'Not a legal number.' })
    }
// 如果有問題 =>
// res.status(406).send({ msg: 'Not a legal number.' }) // 如果沒有問題，回傳 status
})
//router.post('/restart', (_, res) => { ... })
export default router


// yarn remove nodemon
// yarn add nodemon@2.0.14 --> old version but fit your usage.
// yarn add nodemon  --> new version but don't know why auto reload failed
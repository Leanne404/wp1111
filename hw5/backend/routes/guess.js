import express from 'express'
import {genNumber, getNumber} from '../core/getNumber'

const router = express.Router()

router.post('/start', (_, res) => {
    genNumber() // 用亂數產生一個猜數字的 number，存在 memory DB
    res.json({ msg: 'The game has started.' })
})

router.get('/guess', (req, res) => {
    let num = getNumber()
    console.log("number",num)
    // 去 (memory) DB 拿答案的數字
    // 用 req.query.number 拿到前端輸入的數字
    let guessNum = parseInt(req.query.number)
    // check if NOT a num or not in range [1,100]
    // 如果有問題 =>
    // res.status(406).send({ msg: 'Not a legal number.' }) // 如果沒有問題，回傳 status
    
    if(guessNum > 100 || guessNum < 1){
        res.status(406).send({ msg: 'Not a legal number.' })
    }
    if(guessNum === num){
        res.status(200).send({ msg: 'Equal' })
    }
    else if(guessNum > num ){
        res.status(200).send({ msg: 'Smaller' })
    }
    else if(guessNum < num ){
        res.status(200).send({ msg: 'Bigger' })
    }
})

router.post('/restart', (_, res) => { 
    genNumber() // 用亂數產生一個猜數字的 number，存在 memory DB
    res.json({ msg: 'The game has restarted.' })
})
export default router


// yarn remove nodemon
// yarn add nodemon@2.0.14 --> old version but fit your usage.
// yarn add nodemon  --> new version but don't know why auto reload failed
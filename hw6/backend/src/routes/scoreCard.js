import { Router } from "express";
import ScoreCard from "../models/ScoreCard";
const router = Router();

router.post("/card", async(req,res)=>{
    let scoreDetail = req.body
    const existing = await ScoreCard.findOne({ name: scoreDetail.name, subject: scoreDetail.subject} ); 
    
    console.log(scoreDetail)
    console.log("ScoreCard",ScoreCard)
    console.log("e",existing)
    if (existing){
        console.log("exist")
        await ScoreCard.updateOne({ name: scoreDetail.name, subject: scoreDetail.subject},{$set: {score: scoreDetail.score}})
        res.status(200).send( { message: `Updating ( ${scoreDetail.name}, ${scoreDetail.subject}, ${scoreDetail.score} )`})
    }

    else{
        console.log("not exist")
        const newUser = new ScoreCard({ name: scoreDetail.name, subject: scoreDetail.subject, score: scoreDetail.score});
        console.log("Created user", newUser)
        await newUser.save();
        res.status(200).send( { message: `Adding ( ${scoreDetail.name}, ${scoreDetail.subject}, ${scoreDetail.score} )`,card: true})
    }
    console.log("last")
});
router.delete("/cards", async (_,res) => {
    try {
        await ScoreCard.deleteMany({});
        console.log("Database deleted");
        } catch (e) { throw new Error("Database deletion failed"); }
        res.status(200).send({ message: `Database cleared`})
    }
);

router.get("/cards", async(req,res)=>{
    let queryData = req.query
    console.log(queryData)

    if(queryData.type === 'name'){
        const name_existing = await ScoreCard.findOne({ name: queryData.queryString } ); 
        console.log(name_existing)
    }
    else{ //subject

    }
    
    // const existing = await ScoreCard.findOne({ name: queryData .name, subject: queryData.subject} ); 
});

export default router;
    
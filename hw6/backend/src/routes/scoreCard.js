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
        try {
            console.log("not exist")
            const newUser = new ScoreCard({ name: scoreDetail.name, subject: scoreDetail.subject, score: scoreDetail.score});
            console.log("Created user", newUser)
            await newUser.save();
            res.status(200).send( { message: `Adding ( ${scoreDetail.name}, ${scoreDetail.subject}, ${scoreDetail.score} )`,card: true})
        }
        catch (e) { throw new Error("User creation error: " + e);}
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
        const name_existing = await ScoreCard.find({ name: queryData.queryString } ); 
        let queryList = []
        console.log("name",Boolean(name_existing),name_existing, "length",name_existing.length)
        if(name_existing.length !== 0){
            console.log("Found")
            for(let i = 0; i < name_existing.length; i++){
                queryList.push(`Found card with name: ( ${name_existing[i].name}, ${name_existing[i].subject}, ${name_existing[i].score} )`)
            }
            console.log(queryList)
            res.json({ messages: queryList, message: 'message'})
        }
        else{
            console.log("notFound")
            res.json({ message: `${queryData.queryString} not found!`})
        }
    }
    else{ //subject
        const subject_existing = await ScoreCard.find({ subject: queryData.queryString } ); 
        let queryList = []
        if(subject_existing.length !== 0){
            console.log("Found")
            for(let i = 0; i < subject_existing.length; i++){
                queryList.push(`Found card with subject: ( ${subject_existing[i].name}, ${subject_existing[i].subject}, ${subject_existing[i].score} )`)
            }
            console.log(queryList)
            res.json({ messages: queryList, message: 'message'})
        }
        else{
            console.log("notFound")
            res.json({ message: `${queryData.queryString} not found!`})
        }
    }
    
    // const existing = await ScoreCard.findOne({ name: queryData .name, subject: queryData.subject} ); 
});

export default router;
    
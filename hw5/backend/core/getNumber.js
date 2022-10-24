const genNumber = () => {
    let randomNum = Math.floor(Math.random()*100)+1;
    console.log(randomNum)
    return randomNum;
}
export {genNumber}
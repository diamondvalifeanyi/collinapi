const {readAll, getOneTeam} = require("../Model/modelcollin");

const getAllTeams = async(req, res)=>{
    try{
        const teams = await readAll();
        if(!teams[0]){
            console.log("no teams has been registered")
        }else{
            res.end(JSON.stringify(teams))
        }
    }catch(err){
        console.log(err.message)
    }
}

const getOne = async(req, res, id)=>{
    try{
        const team = await getOneTeam(id);
        if(!team){
            res.end(`team not found`)
        }else{
            res.end(JSON.stringify(team))
        }

    }catch(err){
        console.log(err)
    }
}
module.exports = {getAllTeams, getOne};
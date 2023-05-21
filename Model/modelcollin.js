const teams = require("../database.json");

const readAll =()=>{
    return new Promise((resolve, reject)=>{
        resolve(teams)
    })
}

const getOneTeam =(id)=>{
    return new Promise((resolve, reject)=>{
        const team = teams.find((t)=> t.id === id)
        resolve(team)
    })

}

module.exports = {readAll, getOneTeam}
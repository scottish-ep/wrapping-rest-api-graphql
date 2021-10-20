var express = require("express");

var app = express();

const players = [
    {id: 1, first_name: "cristiano", last_name: "ronaldo", team_id: 1},
    {id: 2, first_name: "lionel", last_name: "messi", team_id: 1},
    {id: 3, first_name: "kun", last_name: "aguero", team_id: 2}
];

const teams = [
    {id: 1, name: "PSG"},
    {id: 2, name: "Machester City"}
];

app.get("/api/players", (req, res, next) => {
    let teamId = req.query.team_id;
    if (teamId) {
        let result = players.filter(player => player.team_id == teamId);
        res.json(result);
    } else {
        res.json(players);
    }
});

app.get("/api/teams", (req, res, next) => {
    let id = req.query.id;
    if (id) {
        let result = teams.filter(team => team.id == id);
        res.json(result);
    } else {
        res.json(teams);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

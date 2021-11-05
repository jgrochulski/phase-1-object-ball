

function gameObject() {
    const stats = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    nubmer: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    nubmer: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    nubmer: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    nubmer: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    nubmer: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }

            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    nubmer: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    nubmer: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    nubmer: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    nubmer: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    nubmer: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }

            }
        }
    }
    return stats;
}

// console.log(gameObject());

function numPointsScored (name) {
    const game = gameObject();
    // console.log(Object.keys(game));
    // const gameKeys = Object.keys(game);
    for (let gameKey in game) {
        const team = game[gameKey];
        for (let teamKey in team) {
            const teamInfo = team[teamKey];
            // console.log(teamInfo);
            if (typeof teamInfo == 'object') {
                for (let infoKey in teamInfo) {
                    // console.log(infoKey);
                    // console.log(name);
                    if (infoKey === name) {
                        const pointsScored = game[gameKey][teamKey][infoKey].points
                        if (pointsScored != undefined) {
                            return pointsScored;
                        }
                        else {
                            // console.log("HERE");
                            return `Error: ${name}'s Points Not Recorded`;
                        }
                        // return game[gameKey][teamKey][infoKey].points;
                        // return "we got here"
                    }
                }
            }
        }
    }
    return `Error: Player "${name}" Not Found`;
}

console.log(numPointsScored("Ben Gordon"));

function shoeSize (name) {
    const game = gameObject();
    for (let gameKey in game) {
        const team = game[gameKey];
        for (let teamKey in team) {
            const teamInfo = team[teamKey];
            if (typeof teamInfo == 'object') {
                for (let infoKey in teamInfo) {
                    if (infoKey === name) {
                        const pointsScored = game[gameKey][teamKey][infoKey].shoe
                        if (pointsScored != undefined) {
                            return pointsScored;
                        }
                        else {
                            return `Error: ${name}'s Shoe Size Not Recorded`;
                        }
                    }
                }
            }
        }
    }
    return `Error: Player "${name}" Not Found`;
}

console.log(shoeSize("Ben Gordon"));

// we could use recursion to dig thourgh the levels but.. eh.

function teamColors (teamTarget) {
    const game = gameObject();
    for (let gameKey in game) {
        const team = game[gameKey];
        for (let teamKey in team) {
            const teamInfo = team[teamKey];
            if (game[gameKey].teamName === teamTarget) {
                const teamColorFound = game[gameKey].colors;
                if (teamColorFound != undefined) {
                    return teamColorFound;
                }
                else {
                    return `Error: ${teamTarget}'s Team Colors Not Recorded`;
                }
            }
        }
    }
    return `Error: Team "${teamTarget}" Not Found`;
}

console.log(teamColors("Brooklyn Nets"));


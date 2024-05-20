const pattern_default = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,0,1,0,0,0,-1,-1,-1,-1],[-1,-1,-1,0,0,0,0,1,0,0,0,0,-1,-1,-1],[-1,-1,0,0,0,0,0,1,0,0,0,0,0,-1,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,-1,0,0,0,0,0,1,0,0,0,0,0,-1,-1],[-1,-1,-1,0,0,0,0,1,0,0,0,0,-1,-1,-1],[-1,-1,-1,-1,0,0,0,1,0,0,0,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const pattern_line_1 = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,0,0,0,0,0,-1,-1,-1,-1],[-1,-1,-1,0,0,0,0,0,0,0,0,0,-1,-1,-1],[-1,-1,1,1,1,1,1,1,1,1,1,1,1,-1,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,-1,1,1,1,1,1,1,1,1,1,1,1,-1,-1],[-1,-1,-1,0,0,0,0,0,0,0,0,0,-1,-1,-1],[-1,-1,-1,-1,0,0,0,0,0,0,0,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const pattern_line_2 = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1],[-1,-1,-1,1,1,1,1,1,1,1,1,1,-1,-1,-1],[-1,-1,0,0,0,0,0,0,0,0,0,0,0,-1,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,-1,1,1,1,1,1,1,1,1,1,1,1,-1,-1],[-1,-1,-1,1,1,1,1,1,1,1,1,1,-1,-1,-1],[-1,-1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const pattern_star = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,0,1,0,0,0,-1,-1,-1,-1],[-1,-1,-1,0,0,0,0,1,0,0,0,0,-1,-1,-1],[-1,-1,0,0,0,0,1,1,1,0,0,0,0,-1,-1],[-1,1,1,1,0,0,1,1,1,0,0,1,1,1,-1],[-1,0,1,1,1,1,1,1,1,1,1,1,1,0,-1],[-1,0,0,0,1,1,1,1,1,1,1,0,0,0,-1],[-1,0,0,0,0,1,1,1,1,1,0,0,0,0,-1],[-1,0,0,0,0,1,1,1,1,1,0,0,0,0,-1],[-1,0,0,0,1,1,1,0,1,1,1,0,0,0,-1],[-1,0,0,0,1,1,0,0,0,1,1,0,0,0,-1],[-1,-1,0,1,1,0,0,0,0,0,1,1,0,-1,-1],[-1,-1,-1,1,0,0,0,0,0,0,0,1,-1,-1,-1],[-1,-1,-1,-1,0,0,0,0,0,0,0,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const pattern_heart = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,0,0,0,0,0,0,0,0,0,-1,-1,-1],[-1,-1,0,1,1,0,0,0,0,0,1,1,0,-1,-1],[-1,0,1,1,1,1,0,0,0,1,1,1,1,0,-1],[-1,0,1,1,1,1,1,0,1,1,1,1,1,0,-1],[-1,0,0,1,1,1,1,1,1,1,1,1,0,0,-1],[-1,0,0,0,1,1,1,1,1,1,1,0,0,0,-1],[-1,0,0,0,0,1,1,1,1,1,0,0,0,0,-1],[-1,0,0,0,0,0,1,1,1,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,1,0,0,0,0,0,0,-1],[-1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1],[-1,-1,0,0,0,0,0,0,0,0,0,0,0,-1,-1],[-1,-1,-1,0,0,0,0,0,0,0,0,0,-1,-1,-1],[-1,-1,-1,-1,0,0,0,0,0,0,0,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const pattern_plus = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,1,1,1,0,0,-1,-1,-1,-1],[-1,-1,-1,0,0,0,1,1,1,0,0,0,-1,-1,-1],[-1,-1,0,0,0,0,1,1,1,0,0,0,0,-1,-1],[-1,0,0,0,0,0,1,1,1,0,0,0,0,0,-1],[-1,0,0,0,0,0,1,1,1,0,0,0,0,0,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,0,0,0,0,0,1,1,1,0,0,0,0,0,-1],[-1,0,0,0,0,0,1,1,1,0,0,0,0,0,-1],[-1,-1,0,0,0,0,1,1,1,0,0,0,0,-1,-1],[-1,-1,-1,0,0,0,1,1,1,0,0,0,-1,-1,-1],[-1,-1,-1,-1,0,0,1,1,1,0,0,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const pattern_diamond = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,0,1,0,0,0,-1,-1,-1,-1],[-1,-1,-1,0,0,0,1,1,1,0,0,0,-1,-1,-1],[-1,-1,0,0,1,1,1,1,1,1,0,0,0,-1,-1],[-1,0,0,1,1,1,1,1,1,1,1,0,0,0,-1],[-1,0,1,1,1,1,1,1,1,1,1,1,0,0,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,0,-1],[-1,0,1,1,1,1,1,1,1,1,1,1,0,0,-1],[-1,0,0,1,1,1,1,1,1,1,1,0,0,0,-1],[-1,-1,0,0,1,1,1,1,1,1,0,0,-1,-1,-1],[-1,-1,-1,0,0,1,1,1,1,0,0,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,1,1,0,0,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,0,0,0,0,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,0,0,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const pattern_cross = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,1,0,1,0,0,-1,-1,-1,-1],[-1,-1,-1,0,0,0,1,0,1,0,0,0,-1,-1,-1],[-1,-1,0,0,0,0,1,0,1,0,0,0,0,-1,-1],[-1,0,0,0,0,0,1,0,1,0,0,0,0,0,-1],[-1,0,0,0,0,0,1,1,1,0,0,0,0,0,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,0,0,0,0,1,1,1,1,0,0,0,0,0,-1],[-1,0,0,0,0,1,1,1,1,0,0,0,0,0,-1],[-1,1,1,1,1,1,1,1,1,1,1,1,1,1,-1],[-1,0,0,0,0,1,1,1,1,0,0,0,0,0,-1],[-1,0,0,0,0,1,0,1,0,0,0,0,0,0,-1],[-1,-1,0,0,0,1,0,1,0,0,0,0,0,-1,-1],[-1,-1,-1,0,0,1,0,1,0,0,0,0,-1,-1,-1],[-1,-1,-1,-1,0,0,1,0,1,0,0,-1,-1,-1,-1]];

const pattern_Q = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,0,0,0,0,0,0,0,-1,-1,-1,-1],[-1,-1,-1,0,0,0,0,0,0,0,0,0,-1,-1,-1],[-1,-1,0,0,0,1,1,1,1,1,0,0,0,-1,-1],[-1,0,0,0,1,1,1,1,1,1,1,0,0,0,-1],[-1,0,0,1,1,1,0,0,0,1,1,1,0,0,-1],[-1,0,0,1,1,0,0,0,0,0,1,1,0,0,-1],[-1,0,0,1,1,0,0,0,0,0,1,1,0,0,-1],[-1,0,0,1,1,0,0,0,0,0,1,1,0,0,-1],[-1,0,0,1,1,1,0,0,0,1,1,1,0,0,-1],[-1,0,0,0,1,1,1,1,1,1,1,0,0,0,-1],[-1,-1,0,0,0,1,1,1,1,1,0,0,0,-1,-1],[-1,-1,-1,0,0,0,0,0,1,1,1,1,-1,-1,-1],[-1,-1,-1,-1,0,0,0,0,0,0,0,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

const patterns = [
    {name: "default", pattern: pattern_default, "score": 90},
    {name: "line_1", pattern: pattern_line_1, "score": 40},
    {name: "line_2", pattern: pattern_line_2, "score": 40},
    {name: "star", pattern: pattern_star, "score": 15},
    {name: "heart", pattern: pattern_heart, "score": 10},
    {name: "plus", pattern: pattern_plus, "score": 30},
    {name: "diamond", pattern: pattern_diamond, "score": 25},
    {name: "cross", pattern: pattern_cross, "score": 30},
    {name: "Q", pattern: pattern_Q, "score": 10}
];
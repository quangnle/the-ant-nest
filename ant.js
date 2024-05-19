class Ant{
    constructor(color, x, y, size, angle){
        this.color = color;
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = angle;
        this.dx = Math.cos(this.angle);
        this.dy = Math.sin(this.angle);
        this.counter = 1;
        this.longevity = 100;
        this.mutationRate = 0.1;
        this.appearance = {name: "default", pattern: pattern_default, "score": 90};
        this.genes  = [];
        // add the default pattern
        this.genes.push({name: "default", pattern: pattern_default, "score": 90});
    }

    move(foods, boundaries, obstacles){
        // make the ant move towards the nearest food
        let minDist = 150;
        const aroundFoods = foods.filter(food => dist(this.x, this.y, food.x, food.y) < minDist);        

        // if there is food, move towards to a random one
        if(aroundFoods.length > 0){
            const food = aroundFoods[0];
            const angle = atan2(food.y - this.y, food.x - this.x);
            this.angle = angle;
            this.dx = cos(angle);
            this.dy = sin(angle);
        } else {
            // if there's no food, make a random choice to change direction
            if(random(1) < 0.05){       
                const angle = random(PI/2) - PI/4;
                this.angle += angle;
                this.dx = cos(this.angle);
                this.dy = sin(this.angle);
            }
        }

        //check hit the obstacle left or right or top or bottom
        obstacles.forEach((obstacle) => {
            if(this.x > obstacle.left && this.x < obstacle.right && this.y > obstacle.top && this.y < obstacle.bottom){
                this.x = constrain(this.x, obstacle.left, obstacle.right);
                this.y = constrain(this.y, obstacle.top, obstacle.bottom);
                this.angle += PI/2 + random(PI/2);
                this.dx = cos(this.angle);
                this.dy = sin(this.angle);
            }            
        });

        //check hit the walls
        if(this.x < boundaries.left + this.size || this.x > boundaries.right - this.size || this.y < boundaries.top + this.size || this.y > boundaries.bottom - this.size){
            this.x = constrain(this.x, 0, width);
            this.y = constrain(this.y, 0, height);
            this.angle += PI;
            this.dx = cos(this.angle);
            this.dy = sin(this.angle);
        }     

        // update position
        this.x += this.dx;
        this.y += this.dy;   
    }

    draw(){
        push();       
        // draw the ant
        translate(this.x, this.y);
        rotate(this.angle + PI/2);
        
        // draw the head
        fill(50);
        ellipse(0, -this.size * 0.4, this.size * 0.7, this.size * 0.7);

        // draw 2 dots on the head to represent eyes
        stroke(150);        
        point(-this.size * 0.1, -this.size * 0.55);
        point(this.size * 0.1, -this.size * 0.55);

        // draw the lower body
        stroke(0);
        fill(this.color);
        ellipse(0, this.size >> 1, this.size, this.size);
        
        // draw the pattern
        stroke(0);
        //strokeWeight(1.5);
        for (let i = 0; i < this.appearance.pattern.length; i++) {
            for (let j = 0; j < this.appearance.pattern.length; j++) {
                if (this.appearance.pattern[j][i] === 1) {
                    point(i - this.size/2,j);
                }
            }
        }        
        pop();

        // draw moving legs
        const legLength = this.size * 0.5;
        push();
        translate(this.x, this.y);
        rotate(this.angle + PI/2);
        stroke(0);
        strokeWeight(1);
        line(-legLength, this.counter1, legLength, -this.counter1);
        line(-legLength, this.counter2, legLength, -this.counter2);
        line(-legLength, this.counter3, legLength, -this.counter3);
        pop();

        this.counter1 = this.size * 0.5 * sin(frameCount * 0.1);
        this.counter2 = this.size * 0.5 * sin(frameCount * 0.1 + PI/3);
        this.counter3 = this.size * 0.5 * sin(frameCount * 0.1 + PI/3*2);

    }

    genesInfoString(){
        let stGenes = `Appearance: ${this.appearance.name} \n\nList of genes: \n--------------\n`;
        // total score
        const totalScore = this.genes.reduce((acc, g) => acc + g.score, 0);
        this.genes.forEach(g => {
            stGenes += `${g.name} : $(${Math.round(g.score/totalScore*100)}%) \n`;
        });
        return stGenes;
    }
}
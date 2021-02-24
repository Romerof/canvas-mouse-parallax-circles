const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
cx = width/2; //center x
cy = height/2; //center y

// "#202028"
function drawCanvas(color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
}


// width/2,height/2, 100 "#c1c1c135"
function drawCircle(x, y, r, c) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = c;
    ctx.fill();
}

var drawerFlag = false;
window.addEventListener("mousemove", (e) => {

    if (!drawerFlag) {
        drawerFlag = true; 
        setTimeout(()=>{
            drawEffect(e.clientX, e.clientY);
            drawerFlag = false;
        }, 25);
    } // if
}); //window.addEventListener

function drawEffect(mx, my){
    const x = (p) => calcPercentMove(mx, cx, p);
    const y = (p) => calcPercentMove(my, cy, p);

    requestAnimationFrame(() => {
        drawStars(stars, mx, my, -0.5);
        drawCircle(x(1), y(1), 340, "#c1c1c115");
        drawCircle(x(1), y(1), 300, "#c1c1c115");
        drawCircle(x(2), y(2), 260, "#c1c1c115");
        drawCircle(x(3), y(3), 220, "#c1c1c130");
        drawCircle(x(4), y(4), 180, "#c1c1c140");
        drawCircle(x(5), y(5), 140, "#e1e1e1cc");
        // drawCircle(x(5)+40, y(5)+80, 20, "#c1c1c1cc");
        drawCircle(x(4)-90, y(4)+20, 30, "#c1c1c180");
        drawCircle(x(5)+40, y(5)-70, 50, "#c1c1c180");
        drawCircle(mx, my, 20, "#f1f1f180");
    }) //requestAnimatioFrame

}

drawEffect(cx,cy);
drawEffect(cx,cy);
drawEffect(cx,cy);
drawEffect(cx,cy);

function calcPercentMove (point, ref, percent){

    return Math.round(((point - ref) * percent/100) + ref);
}

function createStars(cantidad  = 10){

    const stars =[];
    for(i=0;i<cantidad;i++){
        const x = rand(50, width-50);
        const y = rand(50, height-50);
        stars.push([x,y]); 
    }
    
    return stars;
}


// #020b16
function drawStars(stars, mx, my, p){
    
    drawCanvas("#050b16cc");
    stars.forEach((star)=>{
        let x = calcPercentMove(mx, star[0], p);
        let y = calcPercentMove(my, star[1], p);
        drawCircle(x, y, 1, "#c1c1c1c1");
    })

}
const stars = createStars(20);


function rand(min, max){
    return Math.round(Math.random() * (max-min) + min)
}

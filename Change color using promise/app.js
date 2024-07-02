let h1= document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed!");
        },delay);
    });
}

changeColor("red",1000)
    .then(()=>{
        console.log("red color is changes!");
        return changeColor("green",1000);
    })
    .then(()=>{
        console.log("green color is changed!");
        return changeColor("blue",1000);

    })
    .then(()=>{
        console.log("blue color is changes!");
        return changeColor("yellow",1000);
    })
    .then(()=>{
        console.log("yellow color is changes!");
        return changeColor("black",1000);
    })
    .then(()=>{
        console.log("black color is changes!");
        
    })


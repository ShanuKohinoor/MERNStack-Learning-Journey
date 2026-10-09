//Function scope
for (var i=1;i<5;i++){
setTimeout(()=>{
    console.log(i)
},1000)
}

//Block scope
for(let i=1;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}


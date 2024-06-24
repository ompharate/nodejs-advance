const doSomething = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("promise returned"),2000);
    })
}

const doSomethingElse = async () => {
    console.log(await doSomething());
}

doSomethingElse();
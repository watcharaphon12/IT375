const p = new Promise ((resolve,reject)=>{

    setTimeout(()=>{
    
    //resolve({id:1,"name":"Watcharaphon"});
    reject(new Error('Error 404 Bad Request'));
    
    },2000);
    });
    console.log('Before Async Operation');
    p.then((result)=>{
        console.log('This is result',result);
    })
    .catch((err)=>{
        console.log(err.message);
    });
    console.log('After Asynchronous Operation');
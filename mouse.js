let arr = new Array();
document.addEventListener('mousemove', (event)=>{
    arr.push([ event.clientX, event.clientY])
    // console.log([event.clientX, event.clientY]);
    // console.log(arr.length);

    if (arr.length === 100){
        let data = JSON.stringify(arr);
        arr.length= 0;
        console.log('Sending Mouse Movements');
        fetch('http://localhost:3000/MouseMovementPrediction',{ method : 'POST', headers:{'Content-Type': 'application/json'}, body: data})
        .then( (res) => res.json())
        .then((data) => {
            // console.log(data.msg)
            localStorage.setItem('MouseMovementsModel', data.msg)
        })
        .catch((e) => console.log(e));
    }
});

function coordinate(event) { 
  
    // clientX gives horizontal coordinate 
    var x = event.clientX; 
 
    // clientY gives vertical coordinates 
    var y = event.clientY; 
    console.log(`X-coor: ${x}, and Y-coor: ${y}`);
 }
//document.addEventListener("mousemove",coordinate) ;
function caller(event){
    coordinate(event);
    setTimeout(caller, 10);
}
document.addEventListener("load", caller);

/* fetch('http://localhost:4000/hello', (err, response) => {
    console.log(response.data);
})*/

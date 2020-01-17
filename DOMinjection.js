document.body.onload = injector;
function injector(event){
    /* 
        Insert: a, div, p, table, 
    */
    alert("running");
    var p = document.createElement("p");
    p.innerHTML = " ";
    document.body.appendChild(p);
    var div = document.createElement("div");
    div.innerHTML = " ";
    document.body.appendChild(div);
    var a = document.createElement("a");
    a.innerHTML = " ";
    document.body.appendChild(a);
    var table = document.createElement("table");
    table.innerHTML = " ";
    document.body.appendChild(table);
}
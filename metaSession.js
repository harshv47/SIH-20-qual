var d = new Date();
var startTime = d.getTime();

var clicks = 0;
var ratio = 0.00001;

function clickCounter(event) {
    
    if (typeof(Storage) !== "undefined") {
       if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      } 
      else {
        sessionStorage.clickcount = 1;
      }
      
      clicks = sessionStorage.clickcount;
      
      var d1 = new Date();
      var currTime = d1.getTime();
      
      // if(currTime>startTime){
      //     ClickSessionRatio = 10000 * clicks / ( (currTime - startTime) );
      // }
      
      // console.log(currTime);
      
      fetch(`http://localhost:3000/SessionRatio?data=${currTime}`)
      .then((response) => response.json())
      .then((data) => localStorage.setItem('ClicksPerSessionRatio', data.msg))
      .catch((err)=>{console.log(err)});
      
    } 
    
    else {
      clicks = 1;
    }
}

document.addEventListener("click", clickCounter);


window.addEventListener("load", () => {
  fetch(`http://localhost:3000/sites`)
  .then( response => response.json())
  .then((data) => localStorage.setItem('MostVisitedSites', data.msg))
  .catch((err)=>{console.log(err)});
  console.log('Loaded')
})

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });


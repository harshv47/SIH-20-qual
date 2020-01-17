var userUrlist = [];
function buildPopupDom(mostVisitedURLs) {
    for (var i = 0; i < mostVisitedURLs.length; i++) {
        var url = mostVisitedURLs[i].url;
        var title = mostVisitedURLs[i].title;
        userUrlist.push(url);
        //console.log(`${i}. Title: ${title} ; url: ${url}`);
    }
}
chrome.topSites.get(buildPopupDom);
console.log(userUrlist);

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
*/
var userUrlist;
function buildPopupDom(mostVisitedURLs) {
    for (var i = 0; i < mostVisitedURLs.length; i++) {
        var url = mostVisitedURLs[i].url;
        var title = mostVisitedURLs[i].title;
        userUrlist.append(url);
        //console.log(`${i}. Title: ${title} ; url: ${url}`);
    }
}
chrome.topSites.get(buildPopupDom);
console.log(userUrlist);
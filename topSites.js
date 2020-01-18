var userUrlist = [];
function buildPopupDom(mostVisitedURLs) {
    for (var i = 0; i < mostVisitedURLs.length; i++) {
        var url = mostVisitedURLs[i].url;
        //var title = mostVisitedURLs[i].title;
        var urlClean = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
        userUrlist.push(urlClean);
        // console.log(`${i}. url: ${url}, urlClean: ${urlClean}`);
    }
    var topScore = 0;

    for(var i=0;i<userUrlist.length;i++){
        for(var j=0;j<top100Site.length;j++){
            if(userUrlist[i]==top100Site[j]){
                topScore += 1;
                console.log(userUrlist[i]);
            }
        }
    }
    fetch(`http://localhost:3000/score?data=${topScore}`, {
    }).then((response) => console.log(response)).catch((err)=>{console.log(err)});
    
    console.log(topScore);
}
chrome.topSites.get(buildPopupDom);


/*fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
*/

var top100Site = [ 
    "fonts.googleapis.com",
    "facebook.com",
    "twitter.com",
    "google.com",
    "youtube.com",
    "instagram.com",
    "s.w.org",
    "ajax.googleapis.com",
    "linkedin.com",
    "googletagmanager.com",
    "plus.google.com",
    "gmpg.org",
    "pinterest.com",
    "maps.google.com",
    "itunes.apple.com",
    "wordpress.org",
    "youtu.be",
    "en.wikipedia.org",
    "bit.ly",
    "play.google.com",
    "flickr.com",
    "amazon.com",
    "github.com",
    "support.google.com",
    "docs.google.com",
    "maps.googleapis.com",
    "goo.gl",
    "vimeo.com",
    "cdnjs.cloudflare.com",
    "s3.amazonaws.com",
    "apis.google.com",
    "google-analytics.com",
    "vk.com",
    "reddit.com",
    "blogger.com",
    "adobe.com",
    "wp.me",
    "drive.google.com",
    "dropbox.com",
    "nytimes.com",
    "apple.com",
    "microsoft.com",
    "t.co",
    "developers.google.com",
    "lh3.googleusercontent.com",
    "sites.google.com",
    "ec.europa.eu",
    "m.facebook.com",
    "paypal.com",
    "creativecommons.org",
    "medium.com",
    "i.imgur.com",
    "soundcloud.com",
    "tumblr.com",
    "translate.google.com",
    "theguardian.com",
    "support.apple.com",
    "1.bp.blogspot.com",
    "wordpress.com",
    "techcrunch.com",
    "upload.wikimedia.org",
    "wired.com",
    "forbes.com",
    "support.microsoft.com",
    "bbc.co.uk",
    "commons.wikimedia.org",
    "huffingtonpost.com",
    "tripadvisor.com",
    "behance.net",
    "w3.org",
    "tinyurl.com",
    "lh5.googleusercontent.com",
    "cnn.com",
    "issuu.com",
    "slideshare.net",
    "web.archive.org",
    "code.google.com",
    "mashable.com",
    "amazon.co.uk",
    "businessinsider.com",
    "imdb.com",
    "washingtonpost.com",
    "eventbrite.com",
    "chrome.google.com",
    "lh4.googleusercontent.com",
    "maxcdn.bootstrapcdn.com",
    "gov.uk",
    "player.vimeo.com",
    "bloomberg.com",
    "yahoo.com",
    "lh6.googleusercontent.com",
    "telegraph.co.uk",
    "google.de",
    "venturebeat.com",
    "amzn.to",
    "groups.google.com",
    "ebay.com",
    "bbc.com",
    "ibm.com",
    "ted.com",
]


// var to fetch : topScore
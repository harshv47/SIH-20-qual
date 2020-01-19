document.addEventListener("click", function() {
    let visited_sites = parseFloat(localStorage.MostVisitedSites);
    let clicks_ratio = parseFloat(localStorage.ClicksPerSessionRatio);
    let mouse_mov = parseFloat(localStorage.MouseMovementsModel);
    
    let confidence_score = 0

    if(mouse_mov <= 0.55) mouse_mov = 800;
    else mouse_mov = 100;

    if(visited_sites >= 6) visited_sites = 500;
    else if(visited_sites > 2) visited_sites = 200;
    else visited_sites = 50;

    confidence_score = mouse_mov + visited_sites;
    sessionStorage.setItem('confidence-score', confidence_score)
    console.log(confidence_score)
    // document.getElementById("root").innerHTML = "Score: " + visited_sites;
});

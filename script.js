let team1Input = document.getElementById('team1-input');
let team1Apply = document.getElementById('team1-apply');
let team2Input = document.getElementById('team2-input');
let team2Apply = document.getElementById('team2-apply');
let team1Name = document.getElementById('team1-name');
let team2Name = document.getElementById('team2-name');

team1Apply.onclick = function(){
    team1Name.innerHTML = team1Input.value ;
    team1Input.value ='';
}
team2Apply.onclick = function(){
    team2Name.innerHTML = team2Input.value ;
    team2Input.value ='';
}
// home
let homeTeamScore = document.getElementById('home-team-score') ;
let homeAddTen = document.getElementById('home-add-10') ;
let homeAddTwenty = document.getElementById('home-add-20') ;
let homeReduceTen = document.getElementById('home-reduce-10') ;
let homeReduceFive = document.getElementById('home-reduce-5') ;

homeAddTen.onclick = 
function(){
    homeTeamScore.innerHTML = Number(homeTeamScore.innerHTML) + 10 
}

homeAddTwenty.onclick = 
function(){
    homeTeamScore.innerHTML = Number(homeTeamScore.innerHTML) + 20 
}

homeReduceTen.onclick = 
function(){
    homeTeamScore.innerHTML = Number(homeTeamScore.innerHTML) - 10 
}

homeReduceFive.onclick = 
function(){
    homeTeamScore.innerHTML = Number(homeTeamScore.innerHTML) - 5 
}
//away 
let awayTeamScore = document.getElementById('away-team-score') ;
let awayAddTen = document.getElementById('away-add-10') ;
let awayAddTwenty = document.getElementById('away-add-20') ;
let awayReduceTen = document.getElementById('away-reduce-10') ;
let awayReduceFive = document.getElementById('away-reduce-5') ;

awayAddTen.onclick = 
function(){
    awayTeamScore.innerHTML = Number(awayTeamScore.innerHTML) + 10 
}

awayAddTwenty.onclick = 
function(){
    awayTeamScore.innerHTML = Number(awayTeamScore.innerHTML) + 20 
}

awayReduceTen.onclick = 
function(){
    awayTeamScore.innerHTML = Number(awayTeamScore.innerHTML) - 10 
}

awayReduceFive.onclick = 
function(){
    awayTeamScore.innerHTML = Number(awayTeamScore.innerHTML) - 5 
}
// team delete 
let homeDel = document.getElementById('home-del') ;
let awayDel = document.getElementById('away-del') ;

homeDel.onclick = 
function(){
    team1Name.innerHTML = '';
}
awayDel.onclick = 
function(){
    team2Name.innerHTML = '';
}
// team update
let homeUpdate = document.getElementById('home-up') ;
let awayUpdate = document.getElementById('away-up') ;

homeUpdate.onclick =
function(){
    team1Input.value = team1Name.innerHTML ;
    team1Name.innerHTML = team1Input.value ;
    team1Apply.innerHTML = 'Apply';
}

awayUpdate.onclick =
function(){
    team2Input.value = team2Name.innerHTML ;
    team2Name.innerHTML = team2Input.value ;
    team2Apply.innerHTML = 'Apply';
}
// delete scores
let deleteHomeScore = document.getElementById('home-delete-score');
let deleteAwayScore = document.getElementById('away-delete-score');

deleteHomeScore.onclick = 
function () {
    homeTeamScore.innerHTML = 0 ;
}

deleteAwayScore.onclick = 
function () {
    awayTeamScore.innerHTML = 0 ;
}
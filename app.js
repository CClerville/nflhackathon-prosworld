'use strict';

var TEAMS = [];


// setupTeamData();
getGameOneData();

function getGameOneData(){
  var GAME_PLAYS = [];
  var TEAM;

  $.get('/game1plays/',  function(data){
    var files = $(data).find('a');

    (function(fls, gp){
      fls.each(function(idx, fname){
        var url = '/game1plays/' + fname.text;
        $.get(url,  function(data){
          if( data.play.playType === 'play_type_pass' ) {
            gp.push( data );
          }
        });
      }); 
    })(files, GAME_PLAYS);

    (function(TEAM){
      $.get('team1-game-1.json',  function(data){
        TEAM = {
          id: data.teamId,
          abbr: data.team.abbr,
          cityState: data.team.cityState,
          fullName: data.team.fullName,
          nick: data.team.nick,
          WRPlayers: []
        };

        data.teamPlayers.forEach(function(p){
          if(p.position ==='WR') {
            p.plays = [];
            TEAM.WRPlayers.push(p);
          }
        });

        TEAM.WRPlayers.forEach(function(p){
          GAME_PLAYS.forEach(function(gp){
            if(TEAM.abbr === gp.schedule.visitorTeam.abbr) {
              gp.awayTrackingData.forEach(function(td){
                if( td.nflId === p.nflId ) {
                  var trackingPlay = td.playerTrackingData;
                  var playStartIndex = null;
                  var playStopIndex = null;
                  for(var i = 0 ; i < trackingPlay.length ; i++) {
                    if(trackingPlay[i].event === 'snap') {
                      playStartIndex = i;
                    }

                    if(trackingPlay[i].event === 'playStopped') {
                      playStopIndex = i;
                      break;
                    }
                  }

                  if( !!playStartIndex && !!playStopIndex ){
                    var filteredPlayerTrackingData = [];
                    for( var x = playStartIndex; x < playStopIndex ; x++ ){
                      filteredPlayerTrackingData.push( trackingPlay[x]);
                    }

                    p.plays.push( filteredPlayerTrackingData );

                  }
                }

              });
            }
            if(TEAM.abbr === gp.schedule.homeTeam.abbr) {
              gp.homeTrackingData.forEach(function(td){
                if( td.nflId === p.nflId ) {
                  var trackingPlay = td.playerTrackingData;
                  var playStartIndex = null;
                  var playStopIndex = null;
                  for(var i = 0 ; i < trackingPlay.length ; i++) {
                    if(trackingPlay[i].event === 'snap') {
                      playStartIndex = i;
                    }

                    if(trackingPlay[i].event === 'playStopped') {
                      playStopIndex = i;
                      break;
                    }
                  }

                  if( !!playStartIndex && !!playStopIndex ){
                    var filteredPlayerTrackingData = [];
                    for( var x = playStartIndex; x < playStopIndex ; x++ ){
                      filteredPlayerTrackingData.push( trackingPlay[x]);
                    }

                    p.plays.push( filteredPlayerTrackingData );

                  }
                }
              });
            }
          });
        });
        TEAMS.push(TEAM);
        window.TEAMS = TEAMS;
      });

    })(TEAM);

    (function(TEAM){
      $.get('team2-game-1.json',  function(data){
        TEAM = {
          id: data.teamId,
          abbr: data.team.abbr,
          cityState: data.team.cityState,
          fullName: data.team.fullName,
          nick: data.team.nick,
          WRPlayers: []
        };

        data.teamPlayers.forEach(function(p){
          if(p.position ==='WR') {
            p.plays = [];
            TEAM.WRPlayers.push(p);
          }
        });

        TEAM.WRPlayers.forEach(function(p){
          GAME_PLAYS.forEach(function(gp){
            if(TEAM.abbr === gp.schedule.visitorTeam.abbr) {
              gp.awayTrackingData.forEach(function(td){
                if( td.nflId === p.nflId ) {
                  var trackingPlay = td.playerTrackingData;
                  var playStartIndex = null;
                  var playStopIndex = null;
                  for(var i = 0 ; i < trackingPlay.length ; i++) {
                    if(trackingPlay[i].event === 'snap') {
                      playStartIndex = i;
                    }

                    if(trackingPlay[i].event === 'playStopped') {
                      playStopIndex = i;
                      break;
                    }
                  }

                  if( !!playStartIndex && !!playStopIndex ){
                    var filteredPlayerTrackingData = [];
                    for( var x = playStartIndex; x < playStopIndex ; x++ ){
                      filteredPlayerTrackingData.push( trackingPlay[x]);
                    }

                    p.plays.push( filteredPlayerTrackingData );

                  }
                }

              });
            }
            if(TEAM.abbr === gp.schedule.homeTeam.abbr) {
              gp.homeTrackingData.forEach(function(td){
                if( td.nflId === p.nflId ) {
                  var trackingPlay = td.playerTrackingData;
                  var playStartIndex = null;
                  var playStopIndex = null;
                  for(var i = 0 ; i < trackingPlay.length ; i++) {
                    if(trackingPlay[i].event === 'snap') {
                      playStartIndex = i;
                    }

                    if(trackingPlay[i].event === 'playStopped') {
                      playStopIndex = i;
                      break;
                    }
                  }

                  if( !!playStartIndex && !!playStopIndex ){
                    var filteredPlayerTrackingData = [];
                    for( var x = playStartIndex; x < playStopIndex ; x++ ){
                      filteredPlayerTrackingData.push( trackingPlay[x]);
                    }

                    p.plays.push( filteredPlayerTrackingData );

                  }
                }
              });
            }
          });
        });
        TEAMS.push(TEAM);
        window.TEAMS = TEAMS;
        $('textarea').val( JSON.stringify(TEAMS, null, 2) );
      });

    })(TEAM);


        
  });
}

// function setupTeamData(){

	


//   $.get('team1-game-1.json',  function(data){
// 		var team = {
// 			id: data.teamId,
// 			abbr: data.team.abbr,
// 			cityState: data.team.cityState,
// 			fullName: data.team.fullName,
// 			nick: data.team.nick,
// 			WRPlayers: []
// 		};

// 		data.teamPlayers.forEach(function(p){
// 			if(p.position ==='WR') {
// 				team.WRPlayers.push(p);
// 			}
// 		});

		

// 		TEAMS.push(team);
// 	});

// 	$.get('team2-game-1.json',  function(data){
// 		var team = {
// 			id: data.teamId,
// 			abbr: data.team.abbr,
// 			cityState: data.team.cityState,
// 			fullName: data.team.fullName,
// 			nick: data.team.nick,
// 			WRPlayers: []
// 		};

// 		data.teamPlayers.forEach(function(p){
// 			if(p.position ==='WR') {
// 				team.WRPlayers.push(p);
// 			}
// 		});

// 		TEAMS.push(team);
// 	});

// 	$.get('team3-game-2.json',  function(data){
// 		var team = {
// 			id: data.teamId,
// 			abbr: data.team.abbr,
// 			cityState: data.team.cityState,
// 			fullName: data.team.fullName,
// 			nick: data.team.nick,
// 			WRPlayers: []
// 		};

// 		data.teamPlayers.forEach(function(p){
// 			if(p.position ==='WR') {
// 				team.WRPlayers.push(p);
// 			}
// 		});

// 		TEAMS.push(team);
// 	});

// 	$.get('team4-game-2.json',  function(data){
// 		var team = {
// 			id: data.teamId,
// 			abbr: data.team.abbr,
// 			cityState: data.team.cityState,
// 			fullName: data.team.fullName,
// 			nick: data.team.nick,
// 			WRPlayers: []
// 		};

// 		data.teamPlayers.forEach(function(p){
// 			if(p.position ==='WR') {
// 				team.WRPlayers.push(p);
// 			}
// 		});

// 		TEAMS.push(team);
// 	});


// 	$.get('team5-game-3.json',  function(data){
// 		var team = {
// 			id: data.teamId,
// 			abbr: data.team.abbr,
// 			cityState: data.team.cityState,
// 			fullName: data.team.fullName,
// 			nick: data.team.nick,
// 			WRPlayers: []
// 		};

// 		data.teamPlayers.forEach(function(p){
// 			if(p.position ==='WR') {
// 				team.WRPlayers.push(p);
// 			}
// 		});

// 		TEAMS.push(team);
// 	});

// 	$.get('team6-game-3.json',  function(data){
// 		var team = {
// 			id: data.teamId,
// 			abbr: data.team.abbr,
// 			cityState: data.team.cityState,
// 			fullName: data.team.fullName,
// 			nick: data.team.nick,
// 			WRPlayers: []
// 		};

// 		data.teamPlayers.forEach(function(p){
// 			if(p.position ==='WR') {
// 				team.WRPlayers.push(p);
// 			}
// 		});

// 		TEAMS.push(team);
// 		console.log( TEAMS );
// 	});

// }

// function getPlayerPlays(){

// }


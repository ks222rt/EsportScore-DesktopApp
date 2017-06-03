'use strict';
import axios from 'axios';
const token = "yG4KDMhzqlng_Vl8H-rCYLYLWSCGpc1WK223nPl5cBnQEnDUslQ";
const gameID = 1;
const host = 'https://api.pandascore.co';

module.exports = {
    get_leagues: function() {
        var requestURL = host + '/videogames/'+ gameID + '/leagues?token=' + token;
        return axios.get(requestURL).then(function(response) {
            if(response.status === 200) {
                return response.data;
            }
        }, function(response) {
            throw new Error(response.message);
        });
    },

    get_matches: function(tournament_id) {
        var requestURL = host + '/tournaments/' + tournament_id + '/matches?token=' + token;
        return axios.get(requestURL).then(function(response) {
            if (response.status === 200) {
                return response.data;
            }
        }, function(response) {
            throw new Error(response.message);
        });
    },

    get_series: function() {
        var requestURL = host + '/videogames/' + gameID + '/series?token=' + token;
        return axios.get(requestURL).then(function(response) {
            if (response.status === 200) {
                return response.data;
            }
        }, function(response) {
            throw new Error(response.message);
        });
    },

    get_tournaments: function() {
        var requestURL = host + '/videogames/' + gameID + '/tournaments?token=' + token;
        return axios.get(requestURL).then(function(response) {
            if (response.status === 200) {
                return response.data;
            }
        }, function(response){
            throw new Error(response.message);
        });
    },

    get_tournaments_of_league: function(league_id) {
        var requestURL = host + '/leagues/' + league_id + '/tournaments?token=' + token;
        return axios.get(requestURL).then(function(response) {
            if (response.status === 200) {
                return response.data;
            }
        }, function(response){
            throw new Error(response.message);
        });
    },

    get_tournaments_of_series: function(series_id) {
        var requestURL = host + '/series/' + series_id + '/tournaments?token=' + token;
        return axios.get(requestURL).then(function(response) {
            if (response.status === 200) {
                return response.data;
            }
        }, function(response){
            throw new Error(response.message);
        });
    },

    get_series_of_league: function(league_id) {
        var requestURL = host + 'leagues/' + league_id + '/series?token=' + token;
        return axios.get(requestURL).then(function(response) {
            if(response.status === 200) {
                return response.data;
            }
        }, function(response) {
            throw new Error(response.message);
        });
    }

} 
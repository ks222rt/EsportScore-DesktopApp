'use strict';
/*import Https from 'https';*/
import axios from 'axios';
const token = "yG4KDMhzqlng_Vl8H-rCYLYLWSCGpc1WK223nPl5cBnQEnDUslQ";
const gameID = 3;
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
    }

} 

/*
export default class csgoClient {
    constructor() {
        this._token = "yG4KDMhzqlng_Vl8H-rCYLYLWSCGpc1WK223nPl5cBnQEnDUslQ";
        this._gameID = 3;
        this._host = 'api.pandascore.co';        
    }

    get_leagues() {
        /*return new Promise((resolve, reject) => {
            var options = {
                host: this._host,
                path: '/videogames/'+ this._gameID + '/leagues?token=' + this._token,
                method: 'GET'
            }

            const getReq = Https.request(options, (res) => {
                console.log('Status code get_leagues: ' + res.statusCode);
                if (res.statusCode < 200 || res.statusCode > 299){
                    reject(new Error('Failed to fetch leagues, status code: ' + res.statusCode))
                }
                const body = [];

                res.on('data', (data) => { body.push(data) });
                res.on('end', () => { resolve(body.join()) });
            });

            getReq.on('error', (err) => { reject(err) });
            getReq.end();
        });
        
        var requestURL = this._host + '/videogames/'+ this._gameID + '/leagues?token=' + this._token;
        return axois.get(requestURL).then(function(res) {
            return res;
        }, function(res) {
            throw new Error('Error');
        });
    }

    get_matches_from_league(tournament_id) {
        var options = {
            host: this._host,
            path: '/tournaments/' + 1936 + '/matches?token=' + this._token,
            method: 'GET'
        }

        var getReq = Https.request(options, (res) => {
            console.log('Status code get_matches_from_league: ', res.statusCode);
            res.on('data', function(data) {
                console.log(JSON.parse(data));
            });  
        });

        getReq.on('error', (err) => {
            console.log('Error: ', err);
        });

        getReq.end();
    }

}*/
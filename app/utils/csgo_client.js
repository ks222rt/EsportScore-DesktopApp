'use strict';
import Https from 'https';

export default class csgoClient {
    constructor() {
        this._token = "yG4KDMhzqlng_Vl8H-rCYLYLWSCGpc1WK223nPl5cBnQEnDUslQ";
        this._gameID = 3;
        
    }

    get_leagues() {
        var options = {
            host: 'api.pandascore.co',
            path: '/videogames/'+ this._gameID + '/leagues?token=' + this._token,
            method: 'GET'
        }

        var getReq = Https.request(options, function(res) {
            console.log('Status code: ' + res.statusCode);
            res.on('data', function(data) {
                console.log(JSON.parse(data));
            });
        });

        getReq.end();
        getReq.on('error', function(err) {
            console.log('Error: ', err);
        });
    }


}
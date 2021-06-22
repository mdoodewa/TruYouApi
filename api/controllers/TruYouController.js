const DigiSigner = require('./DigiSinger');

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const signer = new DigiSigner();

const publicKey = fs.readFileSync(path.join(__dirname,
    'publicKey.pem'));

module.exports = {

    update_stream_data: (req, res, next) => {
        let actualData = "jorrit";
        console.log(publicKey)
        console.log(req.body.signature)
        var decodedStringAtoB = window.atob(req.body.signature);
        console.log(decodedStringAtoB);

        let valueVerify = signer.verifySignature(publicKey, req.body.signature, actualData);

            console.log(valueVerify);    
            res.status(200).json({"nice":"nice"});
            
        // let certStore = new Map([["My Name", cert]]);

        // if (certStore.has("My Name")) {
        //     let certificate = certStore.get("My Name");
        //     // let publicKey = crypto.createPublicKey(certificate).export({type:'spki', format:'pem'});
            
    
        // }
        // else {
        //     res.writeHead(400);
        // }
        // res.end();
    
    },

    create_stream_data: (req, res, next) =>{
        res.status(200).json({'nice' : 'ook zeer nice'});
        console.log(req.body);
    }
}
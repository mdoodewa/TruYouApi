const DigiSigner = require('./DigiSinger');

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const signer = new DigiSigner();

const publicKey = fs.readFileSync(path.join(__dirname,
    'public.der'), 'utf8');
const privateKey = fs.readFileSync(path.join(__dirname,
    'private.der'), 'utf8');



module.exports = {

    update_stream_data: (req, res, next) => {
            
        let certStore = new Map([["My Name", cert]]);

        if (certStore.has("My Name")) {
            let certificate = certStore.get("My Name");
            // let publicKey = crypto.createPublicKey(certificate).export({type:'spki', format:'pem'});
            let valueVerify = signer.verifySignature(publicKey, privateKey, actualData);

            console.log(valueVerify);

            console.log(signer.signData());
    
            res.writeHead(200);
    
        }
        else {
            res.writeHead(400);
        }
        res.end();
    
    },

    create_stream_data: (req, res, next) =>{
        res.status(200).json({'nice' : 'ook zeer nice'});
        console.log(req.body);
    }
}
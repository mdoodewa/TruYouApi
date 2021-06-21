const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = {

    update_stream_data: (req, res, next) => {
        const cert = fs.readFileSync(path.join(__dirname,
            'public.der'), 'utf8');
        
        let certStore = new Map([["My Name", cert]]);

        if (certStore.has(req.body.data.name)) {
            let certificate = certStore.get("My Name");
            let publicKey = crypto.createPublicKey(certificate).export({type:'spki', format:'pem'});
    
            console.log(verifySignature(publicKey, req.body.signature, JSON.stringify(req.body.data)));
    
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

function verifySignature(key, signature, data) {
    console.log(signature);
    const verifier = crypto.createVerify('RSA-SHA256');
    
    verifier.update(data, 'ascii');

    const publicKeyBuf = Buffer.from(key, 'ascii');
    const signatureBuf = Buffer.from(signature, 'hex');
    const result = verifier.verify(publicKeyBuf, signatureBuf);

    return result;
}

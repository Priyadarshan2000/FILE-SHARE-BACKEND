const router = require('express').Router();

const File = require('../models/fileModel');


router.get('/:uuid', async (req, res) => {
    
    try {
        const file = await File.findOne({ uuid: req.params.uuid });

        if(!file) {
            return res.status(400).json({ error: 'Link has been expired.'});
        } 
        
        return res.status(200).render('download',{  uuid: file.uuid, fileName: file.fileName, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`});
    } catch(err) {
        return res.status(400).json({ error: 'Something went wrong.'});
    }
});
module.exports = router;
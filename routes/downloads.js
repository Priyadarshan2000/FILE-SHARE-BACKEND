const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/fileModel');
const { v4: uuidv4 } = require('uuid');


router.get('/:uuid',async (req, res)=>{
    const file = await File.findOne({uuid: req.params.uuid});
    if(!file){
        return res.status(404).json({error: "File not found"});
    }

    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath);
})

module.exports = router;
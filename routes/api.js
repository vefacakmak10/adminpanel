const express = require ('express');


const router = express.Router();





const userPost=require('../models/user');
const formPost=require('../models/form');



router.get('/', (req,res) => {
    userPost.find({})
    .then((data) => {
        console.log('Data:', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error:',error);
    }) ; 
});

router.get('/form', (req,res) => {
   formPost.find({})
    .then((data) => {
        console.log('Data:', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error:',error);
    }) ; 
});
router.post('/api/save', (req, res) => {
    const data = req.body;

    const newformPost = new formPost(data);
    

    newformPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});





router.post('/save', (req, res) => {
    const data = req.body;
    console.log(data)

    const formSave = new formPost(data);
    

    formSave.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'user  gönderildi!!!!!!'
        });
    });
});


    


module.exports=router;
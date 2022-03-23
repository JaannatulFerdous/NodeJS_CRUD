const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "Get request!!"
    })
})
router.post('/', (req,res,next)=>{
    res.status(201).json({
        messages : "Request posted!!"
        
    })
})



module.exports = router;
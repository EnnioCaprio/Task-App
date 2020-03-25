const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try{
        //Controllo header su Postman
        const token = req.header('Authorization').replace('Bearer ', '')
        //Verifica e riconverte il documento user 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        //Trova lo User con id e token
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if(!user){
            throw new Error('Cannot find it')
        }

        req.token = token
        req.user = user
        next()
    }catch(e){
        res.status(401).send({ error: 'Please authenticate' })
    }
}

module.exports = auth
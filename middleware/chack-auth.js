const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        console.log(req.headers.authorization);
        const token = req.headers.authorization.sprit(" ")[1];
        jwt.verify(token, 'this_should_be_longer');
        next();
    } catch (error) {  
        res.status(401).json({message: "Auth failed"});
        
    }
};
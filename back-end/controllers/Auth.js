require("dotenv").config()
const { JWT_SECRET } = process.env
const jwt = require("jsonwebtoken");
const { Users } = require("../models");


exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    
    if (username && password) {
      const existCheck = await Users.findOne({
        where: { userName: username },
      });
      
      if (!existCheck) {
        
        return res.json({
          status: false,
          error: `user ${username} tidak terdaftar`
        }, 400);
      }
      
      const pwdCheck = password === existCheck.password;
      
      if (!pwdCheck) {
        
        return res.json({
          status: false,
          error: "Error!, password salah"
        }, 400);
      }
      
      const accessToken = jwt.sign(
        {
          user:existCheck
        },
        JWT_SECRET,
        {
          expiresIn:"1d"
        }
        )
  
        return res.status(201).json({
          status: true,
          data: {
            user: existCheck,
            token: accessToken,
          },
        });
    }
    } catch (err) {
      return next(err);
    }
  };
  
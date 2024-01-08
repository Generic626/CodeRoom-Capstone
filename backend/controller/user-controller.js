const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // 1. attempt to find user

  // 2. If exist, continue to compare password

  // 3. else return error status and response
};

const createUserAccount = async (req, res, next) => {
  const { email, password } = req.body;

  // 1. hash the  given password using bcrypy
  bcrypt.hash(password, saltRounds, function (err, hashedPw) {
    // 2. create user json payload
    const payload = {
      email,
      password: hashedPw,
    };
    // 3. create user instance and save it to mongoDB
    const newUser = new User(payload);
    newUser.save().then((savedUser) => {
      // const notebookId = savedNotebook._id;
      res.status(200);
    });
  });
};

const updateUserAccount = async (req, res, next) => {
  const { password, avatar } = req.body;
};

exports.loginUser = loginUser;

exports.createUserAccount = createUserAccount;

exports.updateUserAccount = updateUserAccount;

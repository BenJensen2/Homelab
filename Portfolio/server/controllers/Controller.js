const mongoose = require("mongoose");
// const User = mongoose.model("User");
// const jwt = require("jsonwebtoken");

module.exports = {
  index: (req, res) => {
    console.log("BBSP Index");
    res.json({
      message: "Hello Ski Patrol!",
    });
  },

//   getUsers: (req, res) => {
//     User.find()
//       .then((users) => {
//         // user is the parameter passed into .then function
//         console.log("We are looking for all the users");
//         // console.log(res.json(user))
//         // console.log(users)
//         console.log("We found the users");
//         res.json(users); // responding with a .json object of the users
//       })
//       .catch((err) => res.status(400).json(err));
//   },

//   createUser: (req, res) => {
//     console.log("We are creating a user");
//     console.log(req.body);
//     User.create(req.body)
//       .then((user) => {
//         console.log("User Created")
//         // Log User in right away
//         // let secret = process.env.JWT_SECRET_KEY;
//         // const userToken = jwt.sign(
//         //   {
//         //     id: user._id,
//         //   },
//         //   secret
//         // );

//         // res
//         //   .cookie("usertoken", userToken, secret, {
//         //     httpOnly: true,
//         //   })
//         //   .json({ msg: "success!", user: user });
//         // console.log("User Created");
//         // res.json(user);
//       })
//       // Errors
//       .catch((err) => {
//         console.log(err)
//         res.status(400).json(err)});
//   },

//   getUser: (req, res) => {
//     User.findById(req.params.id)
//       .then((user) => {
//         console.log("We are looking for all the users");
//         console.log("We found the users");
//         res.json(user); // responding with a .json object of the users
//       })
//       .catch((err) => res.status(400).json(err));
//   },

//   //updateUser

//   deleteUser: (req, res) => {
//     User.findByIdAndDelete(req.params.id)
//       .then((response) => {
//         console.log("User Deleted");
//         res.json(response);
//       })
//       .catch((err) => {
//         console.log("This is the error", err);
//         res.status(400).json(err);
//       });
//   },

//   login: async (req, res) => {
//     const user = await User.findOne({ email: req.body.email });

//     if (user === null) {
//       // email not found in users collection
//       return res.sendStatus(400);
//     }

//     // if we made it this far, we found a user with this email address
//     // let's compare the supplied password to the hashed password in the database
//     const correctPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );

//     if (!correctPassword) {
//       // password wasn't a match!
//       return res.sendStatus(400);
//     }

//     // if we made it this far, the password was correct
//     const userToken = jwt.sign(
//       {
//         id: user._id,
//       },
//       process.env.JWT_SECRET_KEY
//     );

//     // note that the response object allows chained calls to cookie and json
//     res
//       .cookie("usertoken", userToken, secret, {
//         httpOnly: true,
//       })
//       .json({ msg: "success!" });
//   },
//   logout: (req, res) => {
//     res.clearCookie("usertoken");
//     res.sendStatus(200);
//   },
};

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const UserSchema = new mongoose.Schema(
//   {
//     firstName: {
//       type: String,
//       required: [true, "First name is required"],
//     },
//     lastName: {
//       type: String,
//       required: [true, "Last name is required"],
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       validate: {
//         validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
//         message: "Please enter a valid email",
//       },
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: [8, "Password must be 8 characters or longer"],
//     },
//   },
//   { timestamps: true }
// );

// mongoose.model("User",UserSchema);

// UserSchema.pre("save", function (next) {
//   //  10 times salted
//     bcrypt.hash(this.password, 10).then((hash) => {
//       this.password = hash;
//       next();
//     });
//   });

// UserSchema.virtual("confirmPassword")
//   .get(() => this._confirmPassword)
//   .set((value) => (this._confirmPassword = value));

// // Avoid rewriting the callback function using an arrow function as it will not have the correct scope for this.
// UserSchema.pre("validate", function (next) {
//   if (this.password !== this.confirmPassword) {
//     this.invalidate("confirmPassword", "Password must match confirm password");
//   }
//   next();
// });

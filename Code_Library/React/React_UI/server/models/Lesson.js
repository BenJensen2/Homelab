const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema(
  {
    language: String
  }
);

const LessonSchema = new mongoose.Schema(
  {
    title: String,
    language: [LanguageSchema,LanguageSchema,LanguageSchema],
    // title: String,
    // language: [
    //   {
    //     javascript: {
    //       constant: "const bool = true;",
    //       variable: "var bool = true;",
    //       let: "let bool = true;",
    //     },
    //     python: "bool = True",
    //     CSharp: "bool boolean = true;",
    //   },
    // ],
  },
  { timestamps: true }
);

mongoose.model("Lesson", LessonSchema);

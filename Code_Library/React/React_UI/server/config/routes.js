const LessonController = require('../controllers/LessonController');

module.exports = function(app){
  app.get('/api/Lesson',LessonController.index);
}
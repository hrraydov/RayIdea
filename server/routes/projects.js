var controllers = require('./../controllers');
var passport = require('passport');

module.exports = function(app){
  app.get('/api/projects', passport.authenticate('bearer', {session: false}), controllers.projects.getAll);
  app.get('/api/projects/owner-of', passport.authenticate('bearer', {session: false}), controllers.projects.getOwnerOf);
  app.get('/api/projects/member-of', passport.authenticate('bearer', {session: false}), controllers.projects.getMemberOf);
  app.get('/api/projects/candidate-for', passport.authenticate('bearer', {session: false}), controllers.projects.getCandidateFor);
  app.get('/api/projects/:id', passport.authenticate('bearer', {session: false}), controllers.projects.getById);
  app.post('/api/projects', passport.authenticate('bearer', {session: false}), controllers.projects.create);
  app.delete('/api/projects/:id', passport.authenticate('bearer', {session: false}), controllers.projects.delete);
  app.put('/api/projects/:id/become-member', passport.authenticate('bearer', {session: false}), controllers.projects.becomeMember);
  app.put('/api/projects/:id/cancel-candidature', passport.authenticate('bearer', {session: false}), controllers.projects.cancelCandidature);
  app.put('/api/projects/:projectId/accept-member/:userId', passport.authenticate('bearer', {session: false}), controllers.projects.acceptMember);
  app.put('/api/projects/:projectId/decline-member/:userId', passport.authenticate('bearer', {session: false}), controllers.projects.declineMember);
};
const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'GET /validate': 'UserController.validate',
  'POST /mark/attendence': 'AttendenceController.markAttendence',
  'GET /user/attendence': 'UserController.userAttendence',
};

module.exports = privateRoutes;

const publicRoutes = {
  'POST /register': 'UserController.register', // alias for POST /user
  'POST /login': 'UserController.login',
  'POST /add/detail': 'WifiController.add',
  'PUT /update/detail/:id': 'WifiController.update',
  'GET /wifi-detail': 'WifiController.getAll',
  'GET /all-data': 'UserController.allData',
  'GET /wifi-details': 'WifiDetailController.getDetails',
};

module.exports = publicRoutes;

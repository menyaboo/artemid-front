enum EQueryValues {
  // auth
  GetMe = 'GetMe',
  Login = 'Login',
  Register = 'Register',
  Logout = 'Logout',

  // appeal
  CreateAppeal = 'CreateAppeal',
  GetAllAppeal = 'GetAllAppeal',
  GetAllAppealPersonal = 'GetAllAppealPersonal',

  // service
  GetAllCategoryService = 'GetAllCategoryService',
  GetAllStatusService = 'GetAllStatusService',
  GetAllTypeService = 'GetAllTypeService',

  // analytics
  GetAnalyticsPersonal = 'GetAnalyticsPersonal',
  GetAnalyticsOverall = 'GetAnalyticsOverall',

  // notify
  GetAllNotification = 'GetAllNotification',

  // users
  GetAllUsers = 'GetAllUsers',
  UpdateUser = 'UpdateUser',
  GetOne = 'GetOne',
  GetUserRoles = 'GetUserRoles',
}

export {
  EQueryValues
}
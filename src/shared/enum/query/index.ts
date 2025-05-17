enum EQueryValues {
  // auth
  GetMe = 'GetMe',
  Login = 'Login',
  Register = 'Register',
  Logout = 'Logout',

  // appeal
  CreateAppeal = 'CreateAppeal',
  UpdateAppeal = 'UpdateAppeal',
  GetAllAppeal = 'GetAllAppeal',
  GetAllAppealPersonal = 'GetAllAppealPersonal',

  // service category
  GetAllCategoryService = 'GetAllCategoryService',
  UpdateCategoryService = 'UpdateCategoryService',
  CreateCategoryService = 'CreateCategoryService',
  DeleteCategoryService = 'DeleteCategoryService',
  GetAllStatusService = 'GetAllStatusService',

  // service type
  GetAllTypeService = 'GetAllTypeService',
  CreateTypeService = 'CreateTypeService',
  DeleteTypeService = 'DeleteTypeService',
  UpdateTypeService = 'UpdateTypeService',

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
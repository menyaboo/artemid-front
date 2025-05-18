import { ERouterPath } from "@shared/enum";
import { createBrowserRouter } from "react-router-dom";
import { GuardLayout, MainLayout } from "@app/layouts";
import { lazy } from "react";
import { SuspenseLoadComponent } from "@shared/ui";

const MainPage = lazy(async () => import('@pages/main'))
const ProfilePage = lazy(async () => import('@pages/profile'))
const LoginPage = lazy(async () => import('@pages/login'))
const RegisterPage = lazy(async () => import('@pages/register'))
const AnalyticsPage = lazy(async () => import('@pages/analytics'))
const UsersPage = lazy(async () => import('@pages/users'))
const AppealsPage = lazy(async () => import('@pages/appeals'))
const AppealPage = lazy(async () => import('@pages/appeals/[id]'))
const CategoryServicePage = lazy(async () => import('@pages/category-service'))
const TypeServicePage = lazy(async () => import('@pages/type-service'))

const router = createBrowserRouter([
	{
		element: <MainLayout/>,
		children: [
			{
				element: <GuardLayout/>,
				children: [
					{
						path: ERouterPath.ANY,
						element: <SuspenseLoadComponent Component={ MainPage }/>,
					},
					{
						path: ERouterPath.MAIN,
						element: <SuspenseLoadComponent Component={ MainPage }/>,
					},
					{
						path: ERouterPath.PROFILE,
						element: <SuspenseLoadComponent Component={ ProfilePage }/>,
					},
					{
						path: ERouterPath.ANALYTICS,
						element: <SuspenseLoadComponent Component={ AnalyticsPage }/>,
					},
					{
						path: ERouterPath.USERS,
						element: <SuspenseLoadComponent Component={ UsersPage }/>,
					},
					{
						path: ERouterPath.APPEAL,
						element: <SuspenseLoadComponent Component={ AppealsPage }/>
					},
					{
						path: `${ERouterPath.APPEAL}/:id`,
						element: <SuspenseLoadComponent Component={ AppealPage }/>
					},
					{
						path: ERouterPath.CATEGORY,
						element: <SuspenseLoadComponent Component={ CategoryServicePage }/>
					},
					{
						path: ERouterPath.TYPE,
						element: <SuspenseLoadComponent Component={ TypeServicePage }/>
					}
				],
			},
			{
				path: ERouterPath.LOGIN,
				element: <SuspenseLoadComponent Component={ LoginPage }/>,
			},
			{
				path: ERouterPath.REGISTER,
				element: <SuspenseLoadComponent Component={ RegisterPage }/>,
			},
		],
	},
]);

export default router;
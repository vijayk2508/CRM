import { iRouteConfig, iRoueLink } from "../interfaces/RouteConfig";

export const roueLink: iRoueLink = {
  Login: "/",
  SignUp: "/SignUp",
  ForgetPassword: "/ForgetPassword",
  ResetPassword: "/ResetPassword",
};

export const routes: iRouteConfig[] = [
  {
    path: roueLink.Login,
    componentPath: "pages/Authentication/Login",
  },
  {
    path: roueLink.SignUp,
    componentPath: "pages/Authentication/SignUp",
  },
  {
    path: roueLink.ForgetPassword,
    componentPath: "pages/Authentication/ForgetPassword",
  },
  {
    path: roueLink.ForgetPassword,
    componentPath: "pages/Authentication/ResetPassword",
  },
];

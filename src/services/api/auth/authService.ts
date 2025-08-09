import http from "../../httpService";
import { User } from "../../../types/user/user.types";
import { UserInfo } from "../../../types/auth/auth.types";

export async function loginApi(data: Pick<User, "email" | "password">) {
  return http.post(`/auth/login`, data).then(({ data }) => data);
}

export async function getUserInfoApi() {
  return http.get(`/auth/profile`).then(({ data }) => data);
}
export async function updateUserInfoApi(data: UserInfo) {
  return http.put(`/auth/profile`, data).then(({ data }) => data);
}

export async function changePasswordApi(data: {
  currentPassword: string;
  newPassword: string;
}) {
  return http.put(`/auth/change-password`, data).then(({ data }) => data);
}

const userAuth = {
  loginApi,
  getUserInfoApi,
  updateUserInfoApi,
  changePasswordApi,
};

export default userAuth;

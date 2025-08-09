import { useMutation } from "@tanstack/react-query";
import userAuth from "../services/api/auth/authService";
import { setItem } from "../core/common/storage.services";
import toast from "react-hot-toast";
import { User } from "../types/user/user.types";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: Pick<User, "email" | "password">) =>
      userAuth.loginApi(data),
    onMutate: () => toast.loading("در حال ورود به سایت ..."),

    onSuccess: (data) => {
      if (data?.data?.token) {
        setItem("token", data?.data?.token);
        toast.success("ورود با موفقیت انجام شد");
        window.location.pathname = "/";
      } else {
        toast.error("ایمیل یا رمز عبور اشتباه است");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

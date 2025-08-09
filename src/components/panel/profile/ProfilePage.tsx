import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  getUserInfoApi,
  updateUserInfoApi,
} from "../../../services/api/auth/authService";
import RTHTextField from "../../common/Input";
import Button from "../../ui/Button";

interface UserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth?: string;
}

export default function ProfilePage() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfoApi,
  });

  const { handleSubmit, register, reset } = useForm<UserInfo>();

  useEffect(() => {
    if (user?.data) {
      reset({
        firstName: user?.data.firstName || "",
        lastName: user?.data.lastName || "",
        phone: user?.data.phone || "",
        dateOfBirth: user?.data.dateOfBirth || "",
      });
    }
  }, [user?.data, reset]);

  const queryClient = useQueryClient();
  const { mutate: updateUserInfo, isPending } = useMutation({
    mutationFn: updateUserInfoApi,
    onSuccess: () => {
      toast.success("اطلاعات با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("خطا در ویرایش اطلاعات");
    },
  });

  const onSubmit = (data: UserInfo) => {
    updateUserInfo(data);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">پروفایل</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <RTHTextField
          label="نام"
          placeholder="نام خود را وارد کنید"
          type="text"
          id="firstName"
          name="firstName"
          register={register}
        />
        <RTHTextField
          label="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد کنید"
          type="text"
          id="lastName"
          name="lastName"
          register={register}
        />
        <RTHTextField
          label="شماره تلفن"
          placeholder="شماره تلفن خود را وارد کنید"
          type="tel"
          id="phone"
          name="phone"
          register={register}
        />
        <RTHTextField
          label="تاریخ تولد"
          placeholder="تاریخ تولد خود را وارد کنید"
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          register={register}
        />

        <RTHTextField
          label="ایمیل"
          placeholder="ایمیل"
          type="email"
          id="email"
          name="email"
          defaultValue={user?.data?.email}
          disabled
        />
        <RTHTextField
          label="نقش"
          placeholder="نقش"
          type="text"
          id="role"
          name="role"
          defaultValue={user?.data?.role}
          disabled
        />
        <RTHTextField
          label="تاریخ ثبت نام"
          placeholder="تاریخ ثبت نام"
          type="text"
          id="createdAt"
          name="createdAt"
          defaultValue={user?.data?.createdAt}
          disabled
        />
        <div className="md:col-span-2 xl:col-span-3">
          <Button
            variant="primary"
            className="w-full sm:w-auto px-8"
            disabled={isPending}
            type="submit"
          >
            {isPending ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </Button>
        </div>
      </form>
    </div>
  );
}

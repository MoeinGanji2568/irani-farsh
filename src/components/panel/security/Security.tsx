import { useForm } from "react-hook-form";
import RTHTextField from "../../common/Input";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { changePasswordApi } from "../../../services/api/auth/authService";
import { toast } from "react-hot-toast";

export default function Security() {
  const { mutate: changePassword, isPending } = useMutation({
    mutationFn: changePasswordApi,
    onSuccess: () => {
      toast.success("رمز عبور با موفقیت تغییر کرد");
      console.log(changePassword);
    },
    onError: () => {
      toast.error("خطا در تغییر رمز عبور");
    },
  });

  const { register, handleSubmit } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (data: { currentPassword: string; newPassword: string }) => {
    changePassword(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">تغییر رمز عبور</h1>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RTHTextField
          label="رمز عبور فعلی"
          placeholder="رمز عبور فعلی"
          type="password"
          id="currentPassword"
          name="currentPassword"
          register={register}
        />
        <RTHTextField
          label="رمز عبور جدید"
          placeholder="رمز عبور جدید"
          type="password"
          id="newPassword"
          name="newPassword"
          register={register}
        />
        <Button disabled={isPending}>تغییر رمز عبور</Button>
      </form>
    </div>
  );
}

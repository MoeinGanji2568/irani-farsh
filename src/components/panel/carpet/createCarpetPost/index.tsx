import RTHTextField from "../../../common/Input";
import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import RTHSelectOption from "../../../common/SelectOpt";
import { CreateCarpet } from "../../../../types/carpets/createCarpet.types";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../../../services/api/category";
import { Category } from "../../../../types/category/category.types";
import useCreateCarpet from "../../../../hooks/useCreateCarpet";

const CreateCarpetPost = () => {
  const { register, handleSubmit } = useForm<CreateCarpet>();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategory(),
  });
  const { createCarpetMutation, isPending } = useCreateCarpet();
  const onSubmit = (data: CreateCarpet) => {
    createCarpetMutation(data);
  };

  return (
    <div>
      <h1>ایجاد پست فرش جدید</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
      >
        <RTHTextField
          label="عنوان"
          name="name"
          placeholder="عنوان"
          type="text"
          id="name"
          register={register}
        />
        <RTHTextField
          label="توضیحات"
          name="description"
          placeholder="توضیحات"
          type="text"
          id="description"
          register={register}
        />
        <RTHTextField
          label="قیمت"
          name="price"
          placeholder="قیمت"
          type="number"
          id="price"
          register={register}
        />
        <RTHSelectOption<CreateCarpet>
          label="دسته بندی"
          name="categoryId"
          options={
            !isLoading
              ? categories?.map((category: Category) => {
                  return {
                    value: category?.id,
                    label: category?.name,
                  };
                })
              : []
          }
          id="categoryId"
          register={register}
        />
        <RTHTextField
          label="رنگ"
          name="color"
          placeholder="رنگ"
          type="string"
          id="color"
          register={register}
        />
        <RTHTextField
          label="اندازه"
          name="size"
          placeholder="اندازه"
          type="string"
          id="size"
          register={register}
        />
        <RTHTextField
          label="شکل"
          name="shape"
          placeholder="شکل"
          type="string"
          id="shape"
          register={register}
        />
        <RTHTextField
          label="کیفیت"
          name="quality"
          placeholder="کیفیت"
          type="string"
          id="quality"
          register={register}
        />
        <RTHTextField
          label="فروشنده"
          name="seller"
          placeholder="فروشنده"
          type="string"
          id="seller"
          register={register}
        />
        <RTHTextField
          label="رتبه"
          name="rate"
          placeholder="رتبه"
          type="string"
          id="rate"
          register={register}
        />
        <RTHTextField
          label="تصویر"
          name="image"
          placeholder="لطفا آدرس تصویر را وارد کنید"
          type="string"
          id="image"
          register={register}
        />
        <Button type="submit" className="md:col-span-2" disabled={isPending}>
          {isPending ? "در حال ایجاد..." : "ثبت"}
        </Button>
      </form>
    </div>
  );
};

export default CreateCarpetPost;

import { onErrorImage } from "../../../hooks/OnErrorImage";
import ButtonGroup from "./ButtonGroup";
export const favoriteColumns = [
  {
    accessorKey: "image",
    header: "تصویر",
    cell: ({ getValue }: { getValue: () => string }) => (
      <img
        src={getValue()}
        alt="image"
        className="size-28 md:size-10"
        onError={onErrorImage}
      />
    ),
    size: "5",
  },

  {
    accessorKey: "name",
    header: "نام فرش",
  },
  {
    accessorKey: "updatedAt",
    header: "تاریخ آخرین بروزرسانی",
    cell: ({ getValue }: { getValue: () => string }) => (
      <span>{new Date(getValue()).toLocaleDateString("fa-IR")}</span>
    ),
  },
  {
    accessorKey: "seller",
    header: "فروشنده",
  },
  {
    accessorKey: "quality",
    header: "کیفیت",
  },
  {
    accessorKey: "price",
    header: "قیمت",
    cell: ({ getValue }: { getValue: () => string }) => (
      <span>{getValue()} تومان</span>
    ),
  },
  {
    accessorKey: "id",
    header: "بیشتر",
    cell: ({ getValue }: { getValue: () => string }) => (
      <ButtonGroup rugId={getValue()} />
    ),
  },
];

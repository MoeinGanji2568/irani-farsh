import Image1 from "../assets/images/carpet-1.png";
import Image2 from "../assets/images/carpet-2.png";
import Image3 from "../assets/images/carpet-3.png";
import Image4 from "../assets/images/carpet-4.png";

export interface CategoryDataTypes {
  id: number;
  image: string;
  label: string;
}

export const categoryData = [
  { id: 1, image: Image1, label: "فرش های جدید" },
  { id: 2, image: Image2, label: "فرش های رنگارنگ " },
  { id: 3, image: Image3, label: "پادری دستبافت" },
  { id: 4, image: Image4, label: "موکت اتاق" },
];

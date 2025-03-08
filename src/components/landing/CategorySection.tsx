import { FC } from "react";
import { categoryData, CategoryDataTypes } from "../../constants/CategoryData";
import Button from "../ui/Button";

interface CategorySectionProps {
  categoryData: CategoryDataTypes[];
}

interface CategoryCardProps {
  item: CategoryDataTypes;
  extraClass?: string;
}

const CategorySection: FC<CategorySectionProps> = () => {
  const firstThree = categoryData.slice(0, 2);
  const rest = categoryData.slice(2);
  return (
    <div className="holder flex flex-wrap justify-center gap-5">
      {firstThree.map((item) => (
        <CategoryCard item={item} />
      ))}
      <div className="flex gap-5 flex-col items-center justify-center xl:justify-between">
        {rest.map((item) => (
          <CategoryCard item={item} extraClass="md:h-[132px]" />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

const CategoryCard: FC<CategoryCardProps> = ({ item, extraClass }) => {
  return (
    <div
      className={`${extraClass} max-w-[391px] max-h-[288px] rounded-2xl overflow-hidden relative`}
    >
      <div
        className="absolute top-0 right-0 w-full h-full opacity-50"
        style={{
          background:
            "linear-gradient(to left, rgba(1,48,117,1) 0%, rgba(0,0,0,1) 50%)",
        }}
      ></div>
      <img src={item.image} alt="" className="w-full" />
      <div className="absolute bottom-3 right-3 text-secondary-0 text-xl grid gap-2">
        <span>{item.label}</span>
        <Button
          variant="outline"
          className="border-secondary-0 text-secondary-0"
        >
          مشاهده و خرید {item.label}
        </Button>
      </div>
    </div>
  );
};

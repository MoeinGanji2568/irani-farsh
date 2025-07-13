import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { Rug } from "../../../data/dataTypes";

interface Props {
  rug: Rug;
}

const Cards = ({ rug }: Props) => {
  return (
    <div className="basicborder h-full rounded-xl py-3 flex-shrink-0 bg-white shadow-md">
      <img src={rug.image} alt={rug.title} className="w-full mt-2 rounded-md" />
      <div className="text-lg px-4 mt-4 h-14 font-semibold">{rug.title}</div>
      <div className="flex justify-between mt-5 px-4 text-sm text-gray-700">
        <span>قیمت:</span>
        <span className="text-base font-medium">
          {rug.price.toLocaleString("fa-IR")} تومان
        </span>
      </div>
      <Link to={`/rug/${rug.id}`}>
        <Button
          variant="danger"
          className="w-10/12 mx-auto mt-8 hover:bg-rose-700 hover:text-white block"
        >
          مشاهده بیشتر
        </Button>
      </Link>
    </div>
  );
};

export default Cards;

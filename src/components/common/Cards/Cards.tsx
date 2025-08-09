import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { Carpet } from "../../../types/carpets/carpet.types";
import NotFound from "../../../../public/images/notFound.png";
import { onErrorImage } from "../../../hooks/OnErrorImage";

interface Props {
  rug: Carpet;
}

const Cards = ({ rug }: Props) => {
  return (
    <div className="basicborder h-full rounded-xl py-3 flex-shrink-0 bg-white shadow-md">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={rug.image || NotFound}
          alt={rug.name}
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          onError={onErrorImage}
        />
      </div>
      <div className="text-lg px-4 mt-4 h-14 font-semibold">{rug.name}</div>
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

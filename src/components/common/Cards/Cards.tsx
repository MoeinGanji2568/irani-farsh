import Button from "../../ui/Button";
import rugsData from "../../../data/rugs.json";
import { Rug } from "./../../../data/dataTypes";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      {rugsData.slice(0, 4).map((rug: Rug) => (
        <div className="w-1/4 basicborder h-full rounded-xl">
          <img src={rug.image} alt={rug.title} className="w-full mt-2" />
          <div className="text-lg px-4 mt-4 h-14">{rug.title}</div>
          <div className="flexbetween mt-5 px-4">
            <span>قیمت:</span>
            <span className="text-lg">
              {rug.price.toLocaleString("fa-IR")} تومان
            </span>
          </div>
          <Link to={`/rug/${rug.id}`}>
            <Button
              variant="danger"
              className="w-10/12 mr-6 mt-8 hover:bg-rose-700 hover:text-white"
            >
              مشاهده بیشتر
            </Button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Cards;

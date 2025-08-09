import NotFound from "../../public/images/notFound.png";

export const onErrorImage = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = NotFound;
};

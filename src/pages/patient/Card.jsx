import { AiOutlineRight } from "react-icons/ai";
import Logo from "../../assets/react.svg";
import { Link } from "react-router-dom";

const formatDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}-${month}-${day}`;
};

export default function Card({ title, date, link, image }) {
  return (
    <Link
      to={link}
      className="h-20 w-full mb-3 flex justify-around items-center"
    >
      <div className="h-full w-11/12 rounded-2xl border-0 flex justify-around items-center shadow-normal">
        <img
          className="h-3/5 w-1/5 flex justify-center items-center mx-3 border-0 rounded-full"
          src={image}
        />
        <div className="h-1/6 flex flex-col justify-center items-start">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm text-red-300">
            Date: {date && formatDate(date)}
          </div>
        </div>
        <AiOutlineRight size={32} color="grey" />
      </div>
    </Link>
  );
}

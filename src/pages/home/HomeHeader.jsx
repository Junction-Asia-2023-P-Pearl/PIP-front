import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";

export default function HomeHeader() {
  return (
    <div className="h-1/5 w-full flex flex-col justify-end">
      <div className="h-2/5 w-full flex justify-between items-center pl-2">
        <Link
          to="/"
          className="font-['pacifico'] h-full flex justify-start items-center text-4xl"
        >
          PIP
        </Link>
        <div className="h-full flex mr-3 justify-end items-center">
          <div className="font-['caveat'] text-xs mr-3">
            <div>Hi, Jimin.</div>
            <div>We wish the patient a speedy recovery.</div>
          </div>
          <div>
            <img src={Logo} />
          </div>
        </div>
      </div>
      <div className="bg-bright font-['caveat'] h-2/5 w-full flex justify-center items-center border-0">
        Announcement: Lorem ipsum dolor sit, amet consectetur
      </div>
    </div>
  );
}

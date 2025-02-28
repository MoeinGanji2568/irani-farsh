import { NavLink } from "react-router-dom";
import { NavLinks } from "../../../constants/NavLinks";

const NavigationSection = () => {
  return (
    <ul className="flex items-center gap-6 mt-3 pb-3 border-b-2 border-secondary-300">
      {NavLinks.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "text-red" : "")}
            >
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationSection;

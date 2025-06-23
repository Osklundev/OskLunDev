import { NavLink } from "react-router";

export const NavBar = () => {
  return (
    <header>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/cv">Curriculum Vitae</NavLink>
      <NavLink to="/cl">Cover Letter</NavLink>
    </header>
  );
};

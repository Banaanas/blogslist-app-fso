import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  max-width: 350px;
  padding: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  font-weight: bolder;
  font-size: 1rem;
  text-decoration: none;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  /* React Router NavLink attributes automatically an "active" className
  to the active NavLink (when it matches the URL) */
  &.active {
    color: ${({ theme }) => theme.colors.primary.dark};
    opacity: 1;
  }
`;

const StyledList = styled.ul`
  display: inline-flex;
  padding: 0;
  list-style: none;

  li:not(:first-of-type):not(:last-of-type) {
    margin: 0 1rem;
  }
`;

const NavBar = () => (
  <StyledNav>
    <StyledList>
      <li>
        <StyledNavLink exact to="/">
          HOME
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/my-profile">MY PROFILE</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/users">ALL USERS</StyledNavLink>
      </li>
    </StyledList>
  </StyledNav>
);

export default NavBar;

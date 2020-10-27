import React from "react";
import styled from "@emotion/styled";
import BlogsTable from "../Components/BlogsTable";
import PageHeading from "../Components/PageHeading";

const StyledMain = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  margin-top: 8rem; /* To match the Fixed Header Height */
  padding: 4rem;
  font-size: 2rem;
`;

const HomePage = () => {
  return (
    <StyledMain>
      <PageHeading>Favorite Blogs</PageHeading>
      <BlogsTable />
    </StyledMain>
  );
};

export default HomePage;

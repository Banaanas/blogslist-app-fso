import React from "react";
import AllUsersPagesTable from "../Components/Tables/AllUsersPagesTable";
import PageHeading from "../Components/PageHeading";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";

const AllUsersPage = () => {
  return (
    <StyledPageMain>
      <PageHeading>
        All Users
      </PageHeading>
      <AllUsersPagesTable />
    </StyledPageMain>
  );
};

export default AllUsersPage;

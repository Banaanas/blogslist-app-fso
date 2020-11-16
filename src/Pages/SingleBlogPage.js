import React from "react";
import { pageTransition, pageVariants } from "../styles/animations";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import SingleBlogCard from "../Components/SingleBlog/SingleBlogCard";
import BackButton from "../Components/BackButton";

const SingleBlogPage = () => {
  return (
    <StyledPageMain
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <BackButton />
      <SingleBlogCard />
    </StyledPageMain>
  );
};

export default SingleBlogPage;
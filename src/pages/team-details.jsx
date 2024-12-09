import React from "react";
import SEO from "../common/seo";
import TeamDetails from "../components/team-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"akiTech - Data analytics"} />
      <TeamDetails />
    </Wrapper>
  );
};

export default index;

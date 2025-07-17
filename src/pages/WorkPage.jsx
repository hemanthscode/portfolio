import React, { memo } from "react";
import Work from "../components/organisms/Work";

/**
 * Work page rendering the Work section.
 * @returns {JSX.Element}
 * @example
 * <WorkPage />
 */
const WorkPage = () => (
  <main role="main">
    <Work />
  </main>
);

export default memo(WorkPage);
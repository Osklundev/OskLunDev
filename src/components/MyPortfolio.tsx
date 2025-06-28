import { PortfolioBody } from "./PortfolioBody";
import { PortfolioFooter } from "./PortfolioFooter";
import { PortfolioHeader } from "./PortfolioHeader";
import { PortfolioHero } from "./PortfolioHero";

export const MyPortfolio = () => {
  return (
    <>
      {/* <PortfolioHeader /> */}
      <PortfolioHero />
      <PortfolioBody />
      <PortfolioFooter />
    </>
  );
};

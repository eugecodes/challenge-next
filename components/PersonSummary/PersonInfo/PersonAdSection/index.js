import AdSectionWrapper from "parts/AdSectionWrapper";
import Website from "parts/Website";

const PersonAdSection = ({ websiteUrl, imdbId }) => (
  <AdSectionWrapper>
    <Website href={websiteUrl} />
  </AdSectionWrapper>
);

export default PersonAdSection;

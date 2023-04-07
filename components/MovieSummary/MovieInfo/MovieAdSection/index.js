import AdSectionWrapper from "parts/AdSectionWrapper";
import Website from "parts/Website";
import Imdb from "parts/Imdb";
import Trailer from "./Trailer";

const MovieAdSection = ({ websiteUrl, imdbId, videos }) => (
  <AdSectionWrapper>
    <Website href={websiteUrl} />
  </AdSectionWrapper>
);

export default MovieAdSection;

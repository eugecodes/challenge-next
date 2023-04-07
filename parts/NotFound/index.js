import PageWrapper from "parts/PageWrapper";
import TitleSection from "./TitleSection";
import NotFoundImage from "./NotFoundImage";
import LinkButton from "components/LinkButton";
import LINKS from "utils/constants/links";
import withTheme from "utils/hocs/withTheme";
import QUERY_PARAMS from "utils/constants/query-params";
import STATIC_MOVIE_CATEGORIES from "utils/constants/static-movie-categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";

library.add(faHome);
const NotFound = ({ theme, title, subtitle }) => (
  <>
    <PageWrapper className="not-found">
      <TitleSection theme={theme} title={title} subtitle={subtitle} />
      <NotFoundImage src="/assets/svgs/empty.png" alt="Not found!" />
      <LinkButton
        href={{
          pathname: LINKS.HOME.HREF,
          query: {
            [QUERY_PARAMS.CATEGORY]: STATIC_MOVIE_CATEGORIES[0].name,
            [QUERY_PARAMS.PAGE]: 1,
          },
        }}
        buttonProps={{
          contained: true,
          title: "Home",
          startIcon: <FontAwesomeIcon icon={faHome} size="2x" />,
        }}
      />
    </PageWrapper>
    <style jsx>{`
      :global(.not-found) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @media ${theme.mediaQueries.medium} {
        :global(.not-found) {
          width: 65%;
        }
      }
    `}</style>
  </>
);

export default withTheme(NotFound);

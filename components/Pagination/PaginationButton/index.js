import { useRouter } from "next/router";
import { scroller } from "react-scroll";

import { PAGINATION_BEHAVIOR_TYPES } from "../";
import LinkButton from "components/LinkButton";
import QUERY_PARAMS from "utils/constants/query-params";
import { SCROLL_TO_ELEMENT } from "utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);
library.add(faArrowRight);
const scrollTo = () => {
  scroller.scrollTo(SCROLL_TO_ELEMENT, {
    duration: 1500,
    smooth: "easeInOutQuart",
    offset: -50,
  });
};

const PaginationButton = ({ type, page, ...rest }) => {
  const router = useRouter();
  const pageOnButton =
    type === PAGINATION_BEHAVIOR_TYPES.NEXT ? page + 1 : page - 1;

  return (
    <LinkButton
      href={{
        pathname: router.pathname,
        query: {
          ...router.query,
          [QUERY_PARAMS.PAGE]: pageOnButton,
        },
      }}
      anchorProps={{
        ...rest,
        onClick: scrollTo,
      }}
      buttonProps={{
        startIcon: type !== PAGINATION_BEHAVIOR_TYPES.NEXT && (
          <FontAwesomeIcon icon={faArrowLeft} size="sm" />
        ),
        endIcon: type === PAGINATION_BEHAVIOR_TYPES.NEXT && (
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        ),
        contained: true,
        title: `Page ${pageOnButton}`,
      }}
    />
  );
};

export default PaginationButton;

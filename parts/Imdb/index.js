import AnchorButton from "components/AnchorButton";
import { IMDB_TITLE_URL } from "config/imdb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

library.add(faMobile);

const Imdb = ({ id }) => (
  <>
    {id && (
      <AnchorButton
        anchorProps={{
          href: `${IMDB_TITLE_URL}/${id}`,
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        buttonProps={{
          title: "IMDB",
          endIcon: (
            <FontAwesomeIcon
              icon={faDotCircle}
              size="sm"
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    )}
  </>
);

export default Imdb;

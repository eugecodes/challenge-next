import AnchorButton from "components/AnchorButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

library.add(faLink);

const Website = ({ href }) => (
  <>
    {href && (
      <AnchorButton
        anchorProps={{
          href,
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        buttonProps={{
          title: "Website",
          endIcon: (
            <FontAwesomeIcon
              icon={faLink}
              size="sm"
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    )}
  </>
);

export default Website;

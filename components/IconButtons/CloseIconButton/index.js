import IconButtonBase from "components/UI/IconButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClose } from "@fortawesome/free-solid-svg-icons";

library.add(faClose);

const CloseIconButton = (props) => (
  <IconButtonBase {...props}>
    <FontAwesomeIcon icon={faClose} size="2x" />
  </IconButtonBase>
);

export default CloseIconButton;

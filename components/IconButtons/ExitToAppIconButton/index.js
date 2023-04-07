import IconButtonBase from "components/UI/IconButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFaceGrinSquint } from "@fortawesome/free-solid-svg-icons";

library.add(faFaceGrinSquint);

const ExitToAppIconButton = (props) => (
  <IconButtonBase {...props}>
    <FontAwesomeIcon
      icon={faFaceGrinSquint}
      size="2x"
      style={{ width: 20, height: 20 }}
    />
  </IconButtonBase>
);

export default ExitToAppIconButton;

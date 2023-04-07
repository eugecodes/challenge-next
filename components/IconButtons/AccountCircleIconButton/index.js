import IconButtonBase from "components/UI/IconButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle);

const AccountCircleIconButton = (props) => (
  <IconButtonBase {...props}>
    <FontAwesomeIcon
      icon={faUserCircle}
      size="sm"
      style={{ width: 20, height: 20 }}
    />
  </IconButtonBase>
);

export default AccountCircleIconButton;

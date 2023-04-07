import Router from "next/router";

import Button from "components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);

const BackButton = (props) => (
  <Button
    contained
    title="Back"
    onClick={Router.back}
    startIcon={<FontAwesomeIcon icon={faArrowLeft} size="sm" />}
    {...props}
  />
);

export default BackButton;

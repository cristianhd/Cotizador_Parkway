import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function MessageIncludes({ message, imageUrl }) {
  const renderMessage = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {message}
    </Tooltip>
  );
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 1 }}
      overlay={renderMessage}
    >
      <img src={imageUrl} alt="includes" width={23} />
    </OverlayTrigger>
  );
}

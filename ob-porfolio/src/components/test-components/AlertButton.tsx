import React, { ReactNode } from "react";

interface propsButton {
  buttonText: string;
  sendShowAlert: () => void;
}
function AlertButton({ buttonText, sendShowAlert }: propsButton) {
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={sendShowAlert}>
        {buttonText}
      </button>
    </div>
  );
}

export default AlertButton;

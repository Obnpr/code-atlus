import { ReactNode } from "react";

interface propsAlert {
  children: ReactNode;
}
const Alert = ({ children }: propsAlert) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

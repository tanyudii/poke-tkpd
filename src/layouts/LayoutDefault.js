import { useEffect } from "react";

function LayoutDefault({ children }) {
  useEffect(() => {
    console.log("from layout default");
  }, []);

  return <>{children}</>;
}

export default LayoutDefault;

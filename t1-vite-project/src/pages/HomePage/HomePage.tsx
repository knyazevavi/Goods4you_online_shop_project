import React, { useEffect } from "react";

import { Top, Botton } from "../../widgets";
import { Catalog } from "../../features";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Catalog | Goods4you";
  }, []);

  return (
    <div>
      <Top />
      <Catalog />
      <Botton />
    </div>
  );
};
export default Home;

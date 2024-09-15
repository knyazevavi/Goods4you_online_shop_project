import React, { useEffect } from "react";

import { Top, Catalog, Botton } from "../../components/HomeComponents";

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

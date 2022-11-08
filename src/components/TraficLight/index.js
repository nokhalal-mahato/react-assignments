import { useEffect, useState } from "react";
import lightList from "./Contants/lightList";
import {
  TraficLightContainer,
  TraficLightItem,
  TraficLightPage,
} from "./styledComponent";

const TraficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setColorIndex((prevData) => prevData + 1);
    }, 5000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return (
    <TraficLightPage>
      <TraficLightContainer>
        {lightList.map((item) => (
          <TraficLightItem
            key={item.id}
            color={item.color}
            isActive={colorIndex % 3 === item.id}
          ></TraficLightItem>
        ))}
        {/* <TraficLightItem
        color={lightList[colorIndex % 3].color}
      ></TraficLightItem> */}
      </TraficLightContainer>
    </TraficLightPage>
  );
};
export default TraficLight;

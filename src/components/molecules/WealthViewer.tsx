import {  MainContainer, SmallContainer, MainTitle, Card, Title, Budget, BigCard, Filler, } from "../../elements/Dashboard/WealthViewer";
import GearSVG from "../atoms/SVG/Gear";

interface WealthViewerProps {
    symbols?: string[]
  }

  const WealthViewer: React.FC<WealthViewerProps> = () => {
    const symbols = [['Pesos*', 10000, '$'], ['Dólares', 2500, '$'], ['Bitcoin', 0.045]]
    return (
      <MainContainer>
        <MainTitle>Tu saldo estimado:</MainTitle>
        <BigCard>
          <GearSVG />
          <Title>{symbols[0][0]}</Title>
          <Budget>{symbols[0][2]}{symbols[0][1]}</Budget>
        </BigCard>

        <SmallContainer>
          <Card>
            <Title>{symbols[1][0]}</Title>
            <Budget>{symbols[1][2]}{symbols[1][1]}</Budget>
          </Card>
          <Filler />
          <Card>
            <Title>{symbols[2][0]}</Title>
            <Budget>{symbols[2][2]}{symbols[2][1]}</Budget>
          </Card>
        </SmallContainer>
     </MainContainer>
    )
  }

export default WealthViewer;

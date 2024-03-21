import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ handleLights }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={() => handleLights("off")}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={() => handleLights("on")}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}

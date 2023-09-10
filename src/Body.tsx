import React, { FC } from "react";
import styled from "styled-components";

export const Body: FC = () => {
  return (
    <StyledBody>
      <ContentContainer>
        <div>
          <img src="reshot-icon-rocket-ship-YUMR2P8LFG.svg" width={150} />
        </div>
        <div style={{ flexGrow: 1 }}>
          <h1>It Works!</h1>
          <p>You've got it running!</p>
          <p>
            Now edit <code>src/BodyContent.tsx</code> and
            <br />
            build something marvelous! 🎉
          </p>
        </div>
      </ContentContainer>
    </StyledBody>
  );
};

const StyledBody = styled.body`
  background-color: #efefef;
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ContentContainer = styled.div`
  margin: 6rem auto;
  width: 40rem;
  max-width: 100%;
  padding: 2rem;
  border: 1px solid gray;
  border-radius: 3px;
  text-align: center;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

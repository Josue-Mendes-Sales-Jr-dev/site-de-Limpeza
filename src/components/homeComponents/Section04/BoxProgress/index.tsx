import { props } from "cypress/types/bluebird";
import React, { useState } from "react";
import styled from "styled-components";

interface Iprogress{
  percent:number|string;

}
interface IBar{
  porcentText:string|number|any;
}

const Container = styled.div`
  height: 7px;
  width: 100%;
  position: relative;
  margin-bottom:20px;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 6s ease-in-out;
`;

const Box=styled.div`
  font-size:1rem;
  display:flex;
  align-items:flex-end;
  justify-content:flex-end;
  width:100%;
  margin:.5rem;
`

const Background = styled(BaseBox)`
  background: var(--whiteSite);
  width: 100%;
`;

const Progress = styled(BaseBox)<Iprogress>`
  background: var(--greenSite);
  width: ${({ percent }) => percent}%;
`;

export const BoxProgress:React.FC<IBar>=({porcentText})=>{ 
  const [percent, setPercent] = useState(10);

  setTimeout(() => setPercent(porcentText), 1000);
  
  return (
    <div className="App">
      <Box>{porcentText}%</Box>
      <Container>
        <Background />
        <Progress percent={percent} />
      </Container>
    </div>
  );
}

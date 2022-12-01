import React from 'react';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const FooterWrapper = styled('footer')({ marginTop: '40px' });

const Container = styled(Box)`
  margin-block: 40px;
  width: 100%;
  text-align: center;
  color: grey;
`;
const ItemsContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 3%;
`;
const FooterDivider = styled(Divider)`
  margin-block: 10px;
  margin-inline: 5%;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ItemsContainer>
          <span>Help</span>
          <span>Privacy Policy</span>
          <span>Term of Use</span>
          <span>Legal</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Join Us</span>
        </ItemsContainer>
        <FooterDivider />
        <div>Copyright ©2022 MoView Team: YourView &nbsp; &nbsp;All rights reserved.</div>
      </Container>
    </FooterWrapper>
  );
}

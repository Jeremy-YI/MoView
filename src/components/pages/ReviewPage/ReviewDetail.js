import React from 'react';
import styled from 'styled-components';

const Container = styled.div(
  ({ theme }) => `
    @media (min-width:${theme.breakpoints.largeLaptop}) {
  }
    `
);

const ImageContainer = styled.div`
  min-height: 200px;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  text-align: justify;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
const Time = styled.div``;
const Date = styled.div``;

function ReviewDetail() {
  return (
    <Container>
      <ImageContainer>
        <img
          src="https://resizing.flixster.com/c54rRuqNPW39UMB753ybtRaTMUc=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/40/323/TheImitationGame_175201_Trailer.jpg"
          alt=""
          style={{
            width: `${100}%`,
            height: `${100}%`,
            objectFit: 'cover',
            borderRadius: `${20}px`,
          }}
        />
      </ImageContainer>
      <TextContainer>
        <p style={{ color: 'black' }}>
          Based on the life of the brilliant British Mathematician, Alan Turing, the movie features
          his efforts to break the Nazi Enigma Code through a machine which eventually paved the way
          for modern day computers.
          <br />
          <br />
          It requires something unimaginable to work out the 159 million million million possible
          ways to break the Enigma Code and save lives, which would otherwise become casualty
          figures in a great war – and the movie has beautifully captured this.
          <br />
          <br />
          A dazzling portrayal of a genius played by Benedict Cumberbatch, it’s perhaps one of the
          best biopics one could watch. Keira Knightley played her role exceptionally well as Joan
          Clarke. Her acting precisely depicts how a bright woman might have felt in that era, when
          sexism was rampant and conservatism required for a woman to stay at home. She was able to
          portray all the problems that women came across in fields which were largely dominated by
          men, such as cryptography.
          <br />
          <br />
          An attractive and powerful screenplay by Graham Moore, it proved to be an incredible
          delight for the ears and brain. The following dialogue is my favorite, because of how
          tremendous and emotional it is. It comes at the end of the movie, when Joan tells Alan:
          <br />
          “Do you know, this morning I was on a train that went through a city that wouldn’t exist
          if it wasn’t for you. I bought a ticket from a man who would likely be dead if it wasn’t
          for you. I read up, on my work, a whole field of scientific inquiry that only exists
          because of you. Now, if you wish you could have been normal… I can promise you I do not.
          The world is an infinitely better place precisely because you weren’t (normal).”
          <br />
          <br />
          The Imitation Game was nominated in eight categories for Academy awards. Besides
          Cumberbatch // being nominated for the Best Actor in a Lead Role, Knightley was nominated
          for Best Actress in a Supporting Role. The director of the movie, Morten Tyldum, also got
          nominated for the Best Director category along with Alexandre Desplat getting nominated
          for the category of Best Original Score (he has been nominated in the same category for
          The Grand Budapest Hotel as well). Apart from these, the movie also received nominations
          in the crucial categories of Film Editing, Production Design, and Screenplay Writing.
        </p>
      </TextContainer>
      <TimeContainer>
        <Time>22:30</Time>
        <Date>24/10/2022</Date>
      </TimeContainer>
    </Container>
  );
}

export default ReviewDetail;

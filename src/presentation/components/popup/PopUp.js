import SubmitBtn from '../SubmitBtn';

const PopUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FirstText = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: black;
  flex: column;
  text-align: center;
`;

const SecondText = styled.p`
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: black;
  flex: column;
  text-align: center;
`;

function PopUp({ imgSrc, text1, text2 }) {
    return (
        <PopUpContainer>
            <img src={imgSrc} alt="PopUp-Icon" />

            <TextContainer>
                <FirstText>{text1}</FirstText>
                <SecondText>{text2}</SecondText>    
            </TextContainer>

            <SubmitBtn buttonText="확인" />
        </PopUpContainer>
    );
  }
  export default PopUp;

import {
    PageContainer,
    CandidateContainer,
    CandidateImage,
    CandidateName,
    CandidateDescription,
    ChooseButton
}from './styles';
import Image from '../../img/seumadruga.jpg';


export const HomePage = () => {
    return (
        <PageContainer>
        <CandidateContainer>
            <CandidateImage src={Image}/>
            <CandidateName>Seu Madruga</CandidateName>
            <CandidateDescription>Descrição do usuário</CandidateDescription>
            <div>
                <ChooseButton>❌</ChooseButton>
                <ChooseButton>💚</ChooseButton>
            </div>
        </CandidateContainer>
    </PageContainer>
    );
}
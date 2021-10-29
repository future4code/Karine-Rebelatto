import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 80vh;
`;

export const CandidateContainer = styled.div`
    border: 1px solid black;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: 100%;
`;

export const ListItem = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    width: 80%;
`;
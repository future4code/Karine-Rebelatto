import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 100vh;
    
`;

export const CandidateContainer = styled.div`
    border: 1px solid black;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100%;
    
`;

export const ListItem = styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0.1em;
    padding-right: 3em;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #6959CD
    
`;

export const Avatar = styled.img`
    max-width: 60px;
    margin: 1em;
` 


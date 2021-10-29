import { 
    PageContainer,
    CandidateContainer,
    ListItem
} from './styles';
import { useState } from 'react';


export const MatchesPage = () => {
    const [matches, setMatches] = useState([
        {name: "Seu Madruga", image:""},
        {name: "Mia Colucci", image:""},
        {name: "Chris", image:""},
        {name: "Roberta", image:""}
    ]);
    
    
    return(
        <PageContainer>
            <CandidateContainer>
                {matches.map(match => {
                    return(
                        <ListItem> 
                            <ig src={match.image}/>
                            <h2>{match.name}</h2>
                        </ListItem>
                    )
                })}
            </CandidateContainer>
        </PageContainer>
    )
}
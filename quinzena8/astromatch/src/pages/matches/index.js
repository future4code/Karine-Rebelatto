import {
    PageContainer,
    CandidateContainer,
    ListItem,
    Avatar
} from './styles';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/baseUrl';
import axios from 'axios';

export const MatchesPage = () => {
    const [matches, setMatches] = useState([]);

    const getMatches = () => {
        const URL = `${BASE_URL}/matches`

        axios.get(URL)
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log("Erro", err.response)
            })
    }

    const MapMatches = () => {
        const list = matches.map((match) => {
            return (
                <ListItem>
                    <Avatar src={match.photo} />
                    <h4>{match.name}</h4>
                </ListItem>
            )
        })
        return list
    }

    useEffect(() => {
        getMatches()
    }, []) 


    return (
        <PageContainer>
            <CandidateContainer>
                { matches.length ? <MapMatches/> : <p> Sem matches! </p>}
            </CandidateContainer>
        </PageContainer>
    )

}
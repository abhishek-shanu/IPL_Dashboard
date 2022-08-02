import {React} from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({teamName, match})=>{
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2:match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    return (
        <div className='MatchSmallCard'>
            <h3><Link to={otherTeamRoute}>vs {otherTeam}</Link></h3>
            <h3>{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
        </div>
    )
}
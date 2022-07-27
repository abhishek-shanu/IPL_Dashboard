import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../component/MatchDetailCard';
import { MatchSmallCard } from '../component/MatchSmallCard';

export const TeamPage = ()=>{

    const [team, setTeam] = useState({matches:[]});

    useEffect(
        ()=>{
            const fetchMatches = async () =>{
                const response = await fetch('http://localhost:8080/team/Chennai%20Super%20Kings');
                const data = await response.json();
                setTeam(data);
            }
            fetchMatches();
        },[]
    )

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>
            <MatchDetailCard match={team.matches[0]} />
            {team.matches.slice(1).map(match => <MatchSmallCard match={match} />)}
        </div>
      );
}


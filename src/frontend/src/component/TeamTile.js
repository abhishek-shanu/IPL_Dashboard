import {React} from 'react';
import { Link } from 'react-router-dom';

import './TeamTile.scss';

export const TeamTile=({teamName})=>{
    return(
        <div className='TeamTile'>
            <Link to={`/teams/${teamName}`}>
                <h1>{teamName}</h1>
            </Link>
        </div>
    )
}
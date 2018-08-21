import React from 'react';

const Repos = ({className, title, repos}) => (
    <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map((repos, index) =>(
                <li key={index}><a href={repos.link}>{repos.name}</a></li>     
            ))}
           
        </ul>
    </div>
)

export default Repos;
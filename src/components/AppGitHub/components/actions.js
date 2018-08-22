import React from 'react';

const Actions = ({viewRepos, viewStarred}) => {
    return (
    <div className="actions">
        <button onClick={viewRepos}>Ver repositorios</button>
        <button onClick={viewStarred}>Ver favoritos</button>
    </div>

    )

}

export default Actions;
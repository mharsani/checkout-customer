import React from 'react';
import Search from './search.js'
import UserInfo from './user-info.js'
import Actions from './actions.js'
import  Repos from './repos.js'

const AppContainer = ({userinfo, repos, starred, handleSearch}) => (
    <div className="container-github">
            <Search  handleSearch={handleSearch}/>
            {!!userinfo && <UserInfo userinfo={userinfo}/>}
            {!!userinfo && <Actions /> }
            
            {!!repos.length && <Repos className="repos" title="Repositorios" repos={repos}/>}
            {!!starred.length && <Repos className="starred" title="Favoritos" repos={starred}/>}
            
        </div>
)

export default AppContainer
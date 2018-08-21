import React, {PropTypes} from 'react';

const UserInfo = ({userinfo}) => {
    return(
        <div className="user-info">
                <div className="user-image">
                    <img src={userinfo.photo} />            
                </div>
                <h1 className="user-name">
                    <a href={`https://github.com/${userinfo.userlogin}`}>
                        {userinfo.username}
                    </a>
                </h1>
                <ul className='repos-info'>
                    <li>Repositirios: {userinfo.repos}</li>
                    <li>Seguidores: {userinfo.followers}</li>
                    <li>Seguindo: {userinfo.following}</li>
                </ul>
            </div>
    )
}


export default UserInfo;
import React, {Component} from 'react'

import AppContent from './components/app-container.js'

class AppGithub extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
             repos: [{
                 name: 'repo',
                 link: '#'
             }],
             starred: [{
                name: 'repo',
                link: '#'
             }]

        }
    }
    handleSearch (e) {
            if (e.which == 13 || e.keyCode == 13) {
                let valueSearch = e.target.value;
                fetch(`https://api.github.com/users/${valueSearch}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        userinfo: {
                            isLoaded: true,
                            username: result.name,
                            photo: result.avatar_url,
                            userlogin: result.login,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following
                        }
                            
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: false
                    })
                }
        
            )
        }
        
    }

    render () {
        return(
            <AppContent 
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                handleSearch={(e) => this.handleSearch(e) }
            />
            )
        }
    }

export default AppGithub
import React, {Component} from 'react'

import AppContent from './components/app-container.js'

class AppGithub extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
             repos: [],
             starred: [],
             isFetching: false
        }
    }
    handleSearch (e) {
            if (e.which == 13 || e.keyCode == 13) {
                this.setState({
                    isFetching: true
                })
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
                        },
                        repos: [],
                        starred: []
                            
                    });
                    this.setState({
                        isFetching: false
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: false
                    })
                    this.setState({
                        isFetching: false
                    })
                }
        
            )
        }
    }

    viewRepos(e) {
        fetch(`https://api.github.com/users/${this.state.userinfo.userlogin}/repos`)
        .then(res => res.json())
        .then(result => {
            this.setState({
               repos: result.map((item) => {
                    return {
                        name: item.name,
                        link: item.html_url
                    }
                })
            })
        },
        (error) => {
            this.setState({
                isLoaded: false
            })
        }
      )
    }

    viewStarred(parameter) {
        fetch(`https://api.github.com/users/${this.state.userinfo.userlogin}/${parameter}`)
        .then(res => res.json())
        .then(result => {
            this.setState({
                starred: result.map((item) => {
                    return {
                        name: item.name,
                        link: item.html_url
                    }
                })
            })
        },
        (error) => {
            this.setState({
                isLoaded: false
            })
        }
     )
    }

    render () {
        return (
            <AppContent 
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                handleSearch={(e) => this.handleSearch(e) }
                viewRepos = {(e) => this.viewRepos(e)}
                viewStarred ={(e) => this.viewStarred('starred')}
                isFetching ={this.state.isFetching}
            />
            )
        }
    }

export default AppGithub
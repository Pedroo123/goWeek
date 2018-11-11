import React, { Component } from 'react';
import './Timeline.css';
import twitterLogo from '../twitter.svg';
import api from '../services/api';

export default class Timeline extends Component {
    
    //State para textArea
    state = {
      newTweet: '',  
    };

    //Handlers
    handleNewTweet = async e => {
        if (e.keyCode !== 13) return ;

        const content = this.state.newTweet;
        const author = localStorage.getItem("@GoTwitter:username");

        await api.post('tweets', { content, author });

        //Depois que postar o tweet, limpar o textArea
        this.setState({ newTweet: ''});
    }
    
    handleInputChange = e => {
        this.setState({ newTweet: e.target.value});
    }

    render() {
        return (
            <div className = "timeline-wrapper">
                <img height = {24} src = {twitterLogo} alt = "GoTwitter"/>

                <form>
                    <textarea
                      value = {this.state.newTweet}
                      onChange = {this.handleInputChange}
                      onKeyDown= {this.handleNewTweet}
                      placeholder = "O que está acontecendo?"
                    />
                </form>
            </div>
        );
    }
}
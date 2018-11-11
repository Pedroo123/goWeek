import React, { Component } from 'react';
import './Login.css';
import twitterLogo from '../twitter.svg';

export default class Login extends Component {
    //State para salvar o estado do componente input
    state = {
        username: '',
    };

    //Evento para submeter os dados
    handleSubmit = e => {
        e.preventDefault();

        //Desconstruindo o objeto
        const { username } = this.state;

        //Se nao existir username, redirecionam para a home
        if (!username.length) return;

        //Armazenando o username no storage do navegador
        localStorage.setItem('@GoTwitter: username', username);

        this.props.history.push('/timeline');
    };

    //Evento do Input ao mudar o texto dentro do componente
    handleInputChange = e => {
        this.setState({ username: e.target.value });
    };

    render() {
        return (
           <div className="login-wrapper">
            <img src = {twitterLogo} alt = "GoTwitter" />
            <form onSubmit={this.handleSubmit}>
                <input 
                placeholder = "Nome de usuário" 
                value = {this.state.username}
                onChange = {this.handleInputChange}
                />
                <button type = "submit">Entrar</button>
            </form>
           </div> 
        );
    }
}
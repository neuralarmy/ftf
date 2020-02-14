import React, { Component } from 'react';
import './App.css';
import Contacts from './components/users';
import Projects from './components/projects';
import Features from './components/features';
//import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            projects: [],
            features: [],
            username: '',
            email: '',
            password: '',
            loginname: '',
            loginpass: ''
        }
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginchange = this.handleLoginChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    };

    handleChangeUserName(event) {
        this.setState({ username: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleLoginChange(event) {
        this.setState({ loginname: event.target.loginname });
        this.setState({ loginpass: event.target.loginpass });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username);
        alert('A email was submitted: ' + this.state.email);
        alert('A password was submitted: ' + this.state.password);
        console.log(this.state.username);
        event.preventDefault();
    }

    handleLoginSubmit(event) {
        alert('A name was submitted: ' + this.state.loginname);
        alert('A password was submitted: ' + this.state.loginpass);
        event.preventDefault();
    }


    render() {

        return (
            <div>
                <center><h1>Feature Toggle</h1></center>
                <Router>
                    <div>
                        <div>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/project">Project</Link>
                                    </li>
                                    <li>
                                        <Link to="/user">Users</Link>
                                    </li>
                                    <li>
                                        <Link to="/feature">Feature</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div>
                            <Switch>
                                <Route path="/project">
                                    <Project />
                                </Route>
                                <Route path="/user">
                                    <User />
                                </Route>
                                <Route path="/feature">
                                    <Feature />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>

                <div className="login-page">
                    <div className="form">
                        <form className="register-form" onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="name" defaultValue="Bob" value={this.state.username} onChange={this.handleChangeUserName} />
                            <input type="password" placeholder="password" defaultValue="Bob" value={this.state.email} onChange={this.handleChangeEmail} />
                            <input type="text" placeholder="email address" defaultValue="Bob" value={this.state.password} onChange={this.handleChangePassword} />
                            <input type="submit" value="Submit" />
                            <p className="message">Already registered? Sign In</p>
                        </form>
                        </div>
                        <div className="loginform">
                        <form className="login-form" onSubmit={this.handleLoginSubmit}>
                            <input type="text" placeholder="name" defaultValue="Bob" value={this.state.loginname} onChange={this.handleLoginChange} />
                            <input type="password" placeholder="password" defaultValue="Bob" value={this.state.loginpass} onChange={this.handleLoginChange} />
                            <input type="submit" value="Submit" />
                            <p className="message">Not registered? Create an account</p>
                        </form>
                    </div>
                </div>

                <div>
                    <Contacts contacts={this.state.contacts} />

                    <Projects projects={this.state.projects} />

                    <Features features={this.state.features} />

                </div>

            </div>

        )
    }

    


    componentDidMount() {
        fetch('http://localhost:3000/user')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)

        fetch('http://localhost:3000/project')
            .then(res => res.json())
            .then((data) => {
                this.setState({ projects: data })
            })
            .catch(console.log)

        fetch('http://localhost:3000/feature')
            .then(res => res.json())
            .then((data) => {
                this.setState({ features: data })
            })
            .catch(console.log)
    }

}

function Feature() {
    return <div><Features features={this.state.features} /></div>
}

function Project() {
    return <Projects projects={this.state.projects} />
}

function User() {
    return <Contacts contacts={this.state.contacts} />
}

export default App;

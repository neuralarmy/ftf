import React, { Component } from 'react'
//import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstname: '',
            lastpass: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(event) {
        this.setState({ email: event.target.email });
        this.setState({ password: event.target.password });
        this.setState({ firstname: event.target.firstname });
        this.setState({ lastname: event.target.lastname });
    }

    /*async getDataAxios() {
        const response =
            await axios.post("http://localhost:3000/user/",
                {
                    params: {
                        email: this.state.email,
                        password: this.state.password,
                        firstname: this.state.firstname,
                        lastname: this.state.lastname
                    }
                }
            )
        console.log(response.data)
    }*/

}
const Contacts = ({ contacts }) => {


    return (
        <div>
            <center><h1>User List</h1></center>
            < button onClick="">Show Users</button>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">ID: {contact._id}</h5>
                        <h5 class="card-title">Email: {contact.email}</h5>
                        <h5 class="card-title">Password: {contact.password}</h5>
                        <h5 class="card-title">FirstName: {contact.firstname}</h5>
                        <h5 class="card-title">LastName: {contact.lastname}</h5>
                    </div>
                </div>
            ))}
            <div>
                <form className="create-user" /*onSubmit={this.handleSubmit}*/>
                    <h3 className="message">Create New User</h3>
                    <input type="text" placeholder="Email" /*value={this.state.email} onChange={this.handleChange} *//>
                    <input type="password" placeholder="Password" /*value={this.state.password} onChange={this.handleChange} *//>
                    <input type="text" placeholder="Firstname" /*value={this.state.firstname} onChange={this.handleChange}*/ />
                    <input type="text" placeholder="Lastname" /*value={this.state.lastname} onChange={this.handleChange}*/ />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <form className="search-user">
                    <h3 className="message">Search User by ID</h3>
                    <input type="text" placeholder="UserId" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <form className="delete-user">
                    <h3 className="message">Delete User by ID</h3>
                    <input type="text" placeholder="UserId" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
};

export default Contacts


import React from 'react'

const Projects = ({ projects }) => {
    return (
        <div>
            <center><h1>Project List</h1></center>
            < button onClick="">Show Projects</button>
            {projects.map((project) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">ID: {project._id}</h5>
                        <h5 class="card-title">OwnerID: {project.ownerid}</h5>
                        <h5 class="card-title">OwnerName: {project.ownername}</h5>
                        <h5 class="card-title">ProjectName: {project.name}</h5>
                        <h5 class="card-title">ProjectURL: {project.url}</h5>
                        <h5 class="card-title">Description: {project.description}</h5>
                        <h5 class="card-title">Status: {project.status}</h5>
                    </div>
                </div>
            ))}
            <div>
                        <form className="create-project">
                            <h3 className="message">Create New Project</h3>
                            <input type="text" placeholder="OwnerID" />
                            <input type="password" placeholder="OwnerName" />
                            <input type="text" placeholder="ProjectName" />
                            <input type="text" placeholder="ProjectURL" />
                            <input type="text" placeholder="Description" />
                            <input type="text" placeholder="Status" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                    <div>
                        <form className="search-project">
                            <h3 className="message">Search Project by ID</h3>
                            <input type="text" placeholder="ProjectId" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                    <div>
                        <form className="delete-project">
                            <h3 className="message">Delete Project by ID</h3>
                            <input type="text" placeholder="ProjectId" />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
        </div>
    )
};

export default Projects
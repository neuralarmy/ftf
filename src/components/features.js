import React from 'react'

const Features = ({ features }) => {
    return (
        <div>
            <center><h1>Feature List</h1></center>
            < button onClick="">Show Features</button>
            {features.map((feature) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">ID: {feature._id}</h5>
                        <h5 class="card-title">ProjectId: {feature.projectid}</h5>
                        <h5 class="card-title">OwnerName: {feature.ownername}</h5>
                        <h5 class="card-title">ProjectName: {feature.projectname}</h5>
                        <h5 class="card-title">FeatureName: {feature.name}</h5>
                        <h5 class="card-title">Description: {feature.description}</h5>
                        <h5 class="card-title">Enabled: {feature.enanled}</h5>
                    </div>
                </div>
            ))}
            <div>
                <form className="create-feature">
                    <h3 className="message">Create New Feature</h3>
                    <input type="text" placeholder="ProjectId" />
                    <input type="password" placeholder="OwnerName" />
                    <input type="text" placeholder="ProjectName" />
                    <input type="text" placeholder="FeatureName" />
                    <input type="text" placeholder="Description" />
                    <label>
                        IsEnabled: 
                    <select>
                        <option selected value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <form className="search-feature">
                    <h3 className="message">Search Feature by ID</h3>
                    <input type="text" placeholder="FeatureId" />
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div>
                <form className="delete-feature">
                    <h3 className="message">Delete Feature by ID</h3>
                    <input type="text" placeholder="FeatureId" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
};

export default Features
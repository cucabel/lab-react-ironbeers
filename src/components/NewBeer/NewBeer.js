import React, { Component } from 'react'

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
    
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    
        fetch
          .post("http://localhost:5000/api/projects", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
          .then((response) => {
            this.props.getData(); 
            this.setState({ title: "", description: "" });
          })
          .catch((err) => console.log(err));
      };
    
      handleChange = (event) => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
    
            <label>Description: </label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
    
            <button type="submit">Create a Project</button>
          </form>
        );
      }
    
}

export default NewBeer;
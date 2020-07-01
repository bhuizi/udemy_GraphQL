import React, { Component } from 'react';
import { AddLyricToSong } from '../mutations';
import { graphql } from 'react-apollo';
class LyricCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        }).then(() => this.setState({content: ''}));
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input value={this.state.content}
                onChange={(event) => this.setState({content: event.target.value})}
                />
            </form>
        )
    }
}

export default graphql(AddLyricToSong)(LyricCreate);
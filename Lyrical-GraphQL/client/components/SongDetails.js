import React, { Component } from 'react';
import { graphql } from "react-apollo";
import { Link } from 'react-router';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import { songQuery } from '../queries';
class SongDetails extends Component {
    
    render(){
        const { song, loading } = this.props.data;

        if(loading) {
            return (<div>loading..</div>)
        }
    
        return(
            <div>
                <Link to="/">
                    Back
                </Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics}/>
                <LyricCreate songId={this.props.params.id}/>
            </div>
        )
    }
}

export default graphql(songQuery, {
    options: (props) => { return {variables: {id: props.params.id}}}
})(SongDetails);
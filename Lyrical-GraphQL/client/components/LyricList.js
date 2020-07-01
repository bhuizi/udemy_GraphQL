import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { LikeLyric } from '../mutations';

class LyricList extends Component{
    handleLike(id, likes){
     this.props.mutate({
         variables: { id: id},
         optimisticResponse: {
            __typename: 'Mutation',
            likeLyric: {
                id: id,
                __typename: 'LyricType',
                likes: likes + 1
            }
         }
     })
    }
    render() {
        return(
            <ul className="collection">
               {this.props.lyrics.map(({id, content, likes}) => (
                   <li className="collection-item">{content}
                   <i className="material-icons right"
                    onClick={() => this.handleLike(id, likes)}
                   >thumb_up</i>
                   <span className="right">{likes}</span>
                   </li>
               ))}
            </ul>
        )
    }
}

export default graphql(LikeLyric)(LyricList);
import React, { Component } from 'react';

class LyricList extends Component{
    handleLike(id){
        console.log(id)
    }
    render() {
        console.log(this.props.lyrics);
        return(
            <ul className="collection">
               {this.props.lyrics.map(({id, content}) => (
                   <li className="collection-item">{content}
                   <i className="material-icons right"
                    onClick={() => this.handleLike(id)}
                   >thumb_up</i>
                   </li>
               ))}
            </ul>
        )
    }
}

export default LyricList;
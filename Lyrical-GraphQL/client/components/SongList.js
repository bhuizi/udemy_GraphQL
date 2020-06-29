import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import { query } from "../queries";
import { mutation } from "../mutations";
import { render } from "react-dom";

class SongList extends Component {
  constructor(props) {
    super(props);
  }
  onSongDelete(id) {
    console.log(id);
    this.props.mutate({
      variables: {
        id,
      },
      refetchQueries: [{ query }],
    });
  }
  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i
          className="material-icons right"
          onClick={() => this.onSongDelete(id)}
        >
          delete
        </i>
      </li>
    ));
  }
  render() {
    return (
      <div>
        <h4>Song List</h4>
        <ul className="collection">
          {this.props.data.loading ? <li>loading...</li> : this.renderSongs()}
        </ul>
        <Link to="songs/create" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(SongList));

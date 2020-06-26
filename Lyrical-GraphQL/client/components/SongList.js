import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

function SongList({ data }) {
  const { loading, songs } = data;
  function renderSongs() {
    return songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  }
  return (
    <div>
      <h4>Song List</h4>
      <ul className="collection">
        {loading ? <li>loading...</li> : renderSongs()}
      </ul>
    </div>
  );
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);

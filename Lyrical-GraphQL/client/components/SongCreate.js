import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

import { query } from "./queries";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query }],
      })
      .then(() => {
        hashHistory.push("/");
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div>
        <Link to="/">Go Back</Link>
        <h4>create a song</h4>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title</label>
          <input
            value={this.state.title}
            onChange={(event) =>
              this.setState({ title: event.currentTarget.value })
            }
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);

import gql from "graphql-tag";
export const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export const songQuery = gql`
query SongQuery($id: ID!){
  song(id: $id){
    id
    title
    lyrics{
      id
      content
    }
  }
}
`;

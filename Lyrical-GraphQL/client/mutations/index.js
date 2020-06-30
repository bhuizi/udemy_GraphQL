import gql from "graphql-tag";

export const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id){
      id
    }
  }
`;

export const AddLyricToSong = gql`
mutation AddLyricToSong($content: String, $songId: ID) {
  addLyricToSong(content: $content, songId: $songId){
    id
    lyrics{
      id
      content
    }
  }
}
`;
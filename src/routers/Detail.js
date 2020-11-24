import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  console.log(data);

  if (loading) return <p>Loading....</p>;
  //   if (error) return <p>Error...:(</p>;

  if (data && data.movie) {
    return data.movie.title;
  }
};

export default Detail;

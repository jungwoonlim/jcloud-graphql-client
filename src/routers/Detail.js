import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  query getMovie($intId: Int!) {
    movie(id: $intId) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { intId },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error...:(</p>;

  if (data && data.movie) {
    return data.movie.title;
  }
};

export default Detail;

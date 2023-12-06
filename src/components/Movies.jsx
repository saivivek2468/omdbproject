import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Error from "./Error";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Loader from "./Loader";
import { checkObjectIsEmpty } from "../utils/helper";
import styled from "@emotion/styled";

const Movies = ({ search }) => {
  const Container = styled("div")(({ theme }) => ({
    maxWidth: "900px",
    padding: "10px",
    margin: "50px auto",
    width: "100%",
  }));

  const H2 = styled("h2")(() => ({
    fontSize: "16px",
    fontFamily: "Roboto",
    marginBottom: "10px",
    fontWeight: "bold",
  }));

  const SPAN = styled("span")(() => ({
    fontSize: "16px",
    fontFamily: "Roboto",
    fontWeight: "500",
    marginLeft: "10px",
  }));

  const { loading, error, data } = useFetch(search);
  const [plot, setPlot] = useState(false);
  const { Title, Poster, imdbRating, Released, Genre, Director, Actors, Plot } =
    data;
  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    !checkObjectIsEmpty(data) && (
      <Container>
        <Card
          style={{ maxWidth: "345px" }}
          onClick={() => setPlot((prev) => !prev)}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Poster}
              alt="Poster"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Title}
              </Typography>
              <H2>
                Imdb Rating: <SPAN>{imdbRating}</SPAN>
              </H2>
              <H2>
                Relased Date: <SPAN>{Released}</SPAN>
              </H2>
              <H2>
                Genre:<SPAN>{Genre}</SPAN>
              </H2>
              <H2>
                Directors:<SPAN>{Director}</SPAN>
              </H2>
              <H2>
                Actors:<SPAN>{Actors}</SPAN>
              </H2>
              {plot && (
                <H2>
                  plot:<SPAN>{Plot}</SPAN>
                </H2>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    )
  );
};

export default Movies;

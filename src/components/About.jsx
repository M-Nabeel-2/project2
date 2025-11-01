import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import card1 from "../assets/img/about C/card1.webp";
import card2 from "../assets/img/about C/card2.webp";
import card3 from "../assets/img/about C/card3.webp";
import card4 from "../assets/img/about C/card4.webp";

const About = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            mt: 15,
          }}
          variant="h3"
        >
          About Us
        </Typography>
        <hr />
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            mt: 4,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed <br /> doloremque saepe sint perspiciatis
          explicabo totam vero quas provident ipsam, veritatis nostrum velit
          quos recusandae est mollitia esse fugit dolore laudantium.
          <br /> Ex vel explicabo earum unde eligendi autem praesentium,
          doloremque distinctio nesciunt porro tempore quis eaque labore
          voluptatibus ea necessitatibus exercitationem <br /> tempora
          molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur
          soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem
          optio minus sint nemo <br />
          totam dolorum! Reprehenderit delectus expedita a alias nam recusandae
          illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem
          tempore itaque eveniet quam
          <br />
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
          <br />
        </Typography>
      </Box>
      <Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
            variant="h3"
          >
            Our Products
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 2, m: 2 }}>
          <Grid container spacing={3.4}>
            <Card>
              <Box sx={{ width: 320, border: 2 }}>
                <img src={card1} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 2,
                    border: 2,
                  }}
                >
                  Mens's Clothing
                </Typography>
              </Box>
            </Card>
            <Card>
              <Box sx={{ width: 320, border: 2 }}>
                <img src={card2} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 2,
                    mb: 3,
                    border: 2,
                  }}
                >
                  Women's Clothing
                </Typography>
              </Box>
            </Card>
            <Card>
              <Box sx={{ width: 320, border: 2 }}>
                <img src={card3} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 2,
                    mb: 3,
                    border: 2,
                  }}
                >
                  Jewelery
                </Typography>
              </Box>
            </Card>
            <Card>
              <Box sx={{ width: 320, border: 2 }}>
                <img src={card4} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 2,
                    mb: 3,
                    border: 2,
                  }}
                >
                  Electronics
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

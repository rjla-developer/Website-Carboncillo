import React from "react";

//Next.js:
import Image from "next/image";

//Material UI:
import { Box, Container, Grid, Typography } from "@mui/material";

//Images:
import imgPublicAnchor from "@/assets/images/components/home/homeSectionCommunity/logo-public-anchor.png";
import imgEcoService from "@/assets/images/components/home/homeSectionCommunity/logo-eco-service.png";
import imgCaizen from "@/assets/images/components/home/homeSectionCommunity/logo-caizen.png";
import imgRoft from "@/assets/images/components/home/homeSectionCommunity/logo-roft.png";
import imgStudios from "@/assets/images/components/home/homeSectionCommunity/logo-studios.png";
import imgkoff from "@/assets/images/components/home/homeSectionCommunity/logo-koff.png";
import imgMindPulse from "@/assets/images/components/home/homeSectionCommunity/logo-mind-pulse.png";
import imgTheRoughHouse from "@/assets/images/components/home/homeSectionCommunity/logo-the-rough-house.png";

function HomeSectionCommunity() {
  const dataSectionCommunity = [
    {
      id: 1,
      img: imgPublicAnchor,
      alt: "Logo de la empresa Public Anchor",
    },
    {
      id: 2,
      img: imgEcoService,
      alt: "Logo de la empresa Eco Service",
    },
    {
      id: 3,
      img: imgCaizen,
      alt: "Logo de la empresa Caizen",
    },
    {
      id: 4,
      img: imgRoft,
      alt: "Logo de la empresa Roft",
    },
    {
      id: 5,
      img: imgStudios,
      alt: "Logo de la empresa Studios",
    },
    {
      id: 6,
      img: imgkoff,
      alt: "Logo de la empresa Koff",
    },
    {
      id: 7,
      img: imgMindPulse,
      alt: "Logo de la empresa Mind Pulse",
    },
    {
      id: 8,
      img: imgTheRoughHouse,
      alt: "Logo de la empresa The Rough House",
    },
  ];
  return (
    <Container>
      <Grid
        container
        pt={10}
        py={{ xs: 10, md: 13 }}
        spacing={{ xs: 0, md: 5 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            className="font-family-jaapokkisubtract"
            textAlign={"center"}
            color={"white"}
            fontSize={{ xs: 30, md: 50 }}
            sx={{letterSpacing: 8}}
          >
            COMUNIDAD
          </Typography>
        </Grid>
        {dataSectionCommunity.map((item) => (
          <Grid
            item
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={6}
            md={3}
          >
            <Box>
              <Image
                style={{ borderRadius: "20px" }}
                src={item.img}
                alt={item.alt}
                width={180}
                height={180}
                quality={100}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeSectionCommunity;

import { Box, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from '../../../../assets/images/avatar.jpeg';
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({ theme })=> ({
        backgroundColor: theme.palette.primary.main,
        height:"100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]:{ 
            paddingTop: "80px"
        },
        [theme.breakpoints.up('md')]:{
            paddingTop: "0px"
        }
    }))

    const StyledImg = styled("img")(({ theme })=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

// obs: Container permite melhorar bastante a 
// responsividade mesmo em telas muito grandes

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign={"center"}>
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Philipe Souza</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a BI Developer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                            <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                <StyledButton onClick={() => console.log('download')}>
                                    <DownloadIcon />
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4  }} display={"flex"} justifyContent={"center"}>
                                <StyledButton onClick={() => console.log('download')}>
                                    <MailOutlineIcon />
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
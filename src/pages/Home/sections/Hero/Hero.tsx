import { Button, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from '../../../../assets/images/avatar.jpeg';
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height:"100vh"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))

// obs: Container permite melhorar bastante a 
// responsividade mesmo em telas muito grandes

    return (
      <>
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary" variant="h1" textAlign="center">Philipe Siqueira</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">Business Intelligence Developer</Typography>
                        <Grid container display={"flex"} justifyContent={"center"}>
                            <Grid size={{ xs: 12, md: 6 }} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <DownloadIcon/>
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6  }} display={"flex"} justifyContent={"center"}>
                                <Button>
                                    <MailOutlineIcon/>
                                    Contact me
                                </Button>
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
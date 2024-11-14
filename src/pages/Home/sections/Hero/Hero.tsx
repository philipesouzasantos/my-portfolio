import { styled } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from '../../../../assets/images/avatar.jpeg'

const Hero = () => {

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "30%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
        <Grid container spacing={2}>
            <Grid size={4}>
                <StyledImg src={Avatar} />
            </Grid>
            <Grid size={8}>
                size=4
            </Grid>
        </Grid>

        
        </StyledHero>
      </>
    )
  }
  
  export default Hero
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import image from "../assets/images/ayush.png";

const AppContainer = styled(Paper)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(252.44deg, #63f8d9 0%, #6378f8 100%);
`;

const DashBoardContainer = styled(Box)`
  width: 75vw;
  height: 88vh;
  margin: 2.5% auto 0 auto;
  display: block;
  background: linear-gradient(
    104.13deg,
    rgba(255, 255, 255, 0.48) 0.32%,
    rgba(255, 255, 255, 0.12) 99.34%
  );
  border-radius: 30px;
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(20px);
`;

const Sidebar = styled.div`
  height: 88vh;
  position: relative;
  background: linear-gradient(
    104.13deg,
    rgba(255, 255, 255, 0.48) 0.32%,
    rgba(255, 255, 255, 0.12) 99.34%
  );
  border-radius: 30px 0 0 30px;
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */
`;

const Ecllipse1 = styled.div`
  width: 250px;
  height: 250px;
  bottom: 73px;
  position: absolute;
  border-radius: 50%;
  transform: rotate(31.79deg);
  background: linear-gradient(
    183.54deg,
    #ffffff 1.31%,
    rgba(255, 255, 255, 0.12) 95.35%
  );
  left: 60px;
`;

const Ecllipse2 = styled.div`
  width: 250px;
  height: 250px;
  top: 73px;
  position: absolute;
  border-radius: 50%;
  transform: rotate(31.79deg);
  background: linear-gradient(
    183.54deg,
    rgba(255, 255, 255, 0.8) 64.69%,
    rgba(255, 255, 255, 0.096) 158.73%
  );
  right: 60px;
`;

const ProfileHodler = styled.div`
  position: absolute;
  width: 185px;
  height: 185px;
  left: 35px;
  top: 54px;
  overflow: hidden;
  border-radius: 50%;

  background: radial-gradient(
    185.55% 170.41% at 100% 58.92%,
    rgba(76, 242, 232, 0.6) 0%,
    rgba(255, 255, 255, 0.072) 100%
  );
  backdrop-filter: blur(100px);
`;

/**
 * width: 200px;
    height: 200px;
    position: absolute;
    left: -16px;
}
 */
const useStyles = makeStyles((theme) => ({
  image: {
    width: 200,
    height: 200,
    position: "absolute",
    left: 0,
  },
  name: { display: "block", color: "#547398", letterSpacing: "1px" },
  jobProfileHeading: {
    display: "block",
    color: "#547398",
    letterSpacing: "1px",
    marginTop: 10,
  },
  pictureContainer: {
    position: "relative",
  },
  sidebarTitle: {
    position: "absolute",
    top: "42vh",
    left: "87px",
  },
}));

export const Layout = ({ view: ViewComponent }) => {
  const classes = useStyles();
  return (
    <AppContainer>
      <Grid container>
        <Ecllipse1 />
        <Ecllipse2 />
        <DashBoardContainer>
          <Grid item sm={3}>
            <Sidebar>
              <div className={classes.pictureContainer}>
                <ProfileHodler>
                  <img
                    src={image}
                    alt="ayush_profile_pic"
                    className={classes.image}
                  />
                </ProfileHodler>
              </div>
              <div className={classes.sidebarTitle}>
                <Typography variant="Subtitle1" className={classes.name}>
                  Ayush Sinha
                </Typography>
                <Typography
                  variant="caption"
                  className={classes.jobProfileHeading}
                >
                  Web Developer
                </Typography>
              </div>
            </Sidebar>
          </Grid>
          <Grid item xs={12} sm={9}>
            <ViewComponent />
          </Grid>
        </DashBoardContainer>
      </Grid>
    </AppContainer>
  );
};

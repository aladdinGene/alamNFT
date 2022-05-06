/* eslint-disable prettier/prettier */
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import flashFill from '@iconify/icons-eva/flash-fill';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Link as RouterLink } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid, useMediaQuery, useTheme } from '@material-ui/core';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.common.white
}));

// ----------------------------------------------------------------------

export default function LandingSolana() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const GridStyle = styled((props) => <Grid container {...props} />)(({ theme }) => ({
    // zIndex: 10,
    // position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down('md')]: {
      maxWidth: '550px',
      margin: 'auto'
    }
  }));
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="lg">
          <GridStyle container sx={{ paddingTop: 6, paddingBottom: 6 }}>
            <Grid item xs={12} md={12} sx={{ backgroundSize: 'cover', backgroundImage: 'url("/static/home/home-banner.png")', padding: '40px', borderRadius: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" color={theme.palette.grey['800']}>
                        Solana is in beta on OpenSea
                    </Typography>
                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        component={RouterLink}
                        to="#"
                    >
                        Explore
                    </Button>
                </Stack>
            </Grid>
          </GridStyle>
        </Container>
      </RootStyle>
    </>
  );
}

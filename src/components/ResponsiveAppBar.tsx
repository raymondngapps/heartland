import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Link, Trans, useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";

const pages = ['APP_BAR_HEARTLAND_FUND', 'APP_BAR_OUR_TEAM', 'APP_BAR_SERVICES', 'APP_BAR_TRAININGS', 'APP_BAR_RESOURCES', 'APP_BAR_DRUMBEAT', 'APP_BAR_BLOG'];

interface ResponsiveAppBarProps {
  sx?: React.CSSProperties;
};
// This is use to make the menu always on top when scrolling
// https://mui.com/material-ui/react-app-bar/
const ElevationScroll = (props: React.PropsWithChildren<ResponsiveAppBarProps>) => {
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children as React.ReactElement, {
    elevation: trigger ? 4 : 0,
  });
};

const ResponsiveAppBar = (props: React.PropsWithChildren<ResponsiveAppBarProps>) => {

  const { t } = useTranslation();
  const {languages, originalPath} = useI18next();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar sx={{ bgcolor: 'rgb(124,190,209)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StaticImage src='../images/logo.png' alt="logo" height={110}/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Trans>APP_BAR_HOME</Trans>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{t(page)}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  { t(page) }
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Switch Language">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang} onClick={handleCloseUserMenu}>
                    <Link to={originalPath} language={lang} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      <Trans>{lang}</Trans>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default ResponsiveAppBar;
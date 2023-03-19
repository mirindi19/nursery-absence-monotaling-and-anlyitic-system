import * as React from 'react';
import './topbar.scss'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import ButtonGroup from "@mui/material/Button";
import { useHistory,Link} from 'react-router-dom';
import IMAGES from "../../Assets/images";

const pages = ['Home','Login'];
const settings = [ 'Logout'];
const Topnav= () => {
  const token =  localStorage.getItem("access-token");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const history = useHistory();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const handleSettings=(event)=>{
    if(event==="Logout"){
      localStorage.removeItem("access-token");
      history.push("/",{ push: true })
    }
   
    else{
      setAnchorElNav(null);
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'#ffff'}} >
      <Container maxwidth="xl" minwidth="sm">
        <Toolbar disableGutters>
          <img src={IMAGES.logo} alt="" className='logo'/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to=""  className="linkStyle">
            MIGEPROF
            </Link>
         
          </Typography>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
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
                  <Typography  onClick={()=>handleMenu(page)}  textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      
          <Typography
            variant="h5"
            noWrap
            component="a"
           
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <Link to="/dashboard" className="linkStyle">
          MIGEPROF 
            </Link>
          </Typography>

          // button style
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , marginRight:-100, color:'gray'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleMenu(page)}
                sx={{ my: 2, color: 'gray', display: 'block'}}
              >
             {token && page==="Login"?null:page}
              </Button>
            ))}
          </Box>
{ !token?null:<Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    <Avatar alt="Lemy Sharp" src="/static/images/avatar/2.jpg" />
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
  {settings.map((setting) => (
    <MenuItem key={setting} onClick={handleCloseUserMenu}>
      <Typography onClick={()=>handleSettings(setting)} textAlign="center">{setting}</Typography>
    </MenuItem>
  ))}
</Menu>
</Box>}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Topnav;
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuItem } from 'material-ui/Menu';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

injectTapEventPlugin();

class App extends Component {
	constructor (props) {
		super(props);
		this.state = { open: false }
	}

	toggleDrawer () {
		this.setState(function (oldState) {
			return { open: !oldState.open }
		});
	}
	
	render() {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<IconButton color="contrast" aria-label="Menu" onClick={this.toggleDrawer.bind(this)}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit">
							Title
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer open={this.state.open} onRequestClose={this.toggleDrawer.bind(this)}>
					<MenuItem>MenuItem</MenuItem>
					<MenuItem>MenuItem 2</MenuItem>
				</Drawer>
				<BottomNavigation>
					<BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
					<BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
					<BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
				</BottomNavigation>
			</div>
		);
	}
}

export default App;
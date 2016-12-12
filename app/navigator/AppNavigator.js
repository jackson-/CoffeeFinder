import React, {Component} from 'react';
import {Navigator} from 'react-native';
import Results from '../components/Results';
import Search from '../components/Search';

export default class AppNavigator extends Component {
	constructor(props){
		super();

	}

	_renderScene(route, navigator){
		var globalNavigatorProps = { navigator }
		switch(route.ident){
			case "Search":
				return (
					<Search {...globalNavigatorProps}/>
				)
			case "Results":
				console.log("GOT TO RESULTS IN SWITCH")
				return(
					<Results {...globalNavigatorProps} data={route.data} />
				)
		}
	}

	render(){
		return(
			<Navigator
				initialRoute={this.props.initialRoute}
				renderScene={this._renderScene}
				configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}/>
		)
	}
}
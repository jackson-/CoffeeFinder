import React, {Component} from 'react';
import {StyleSheet,
		Text,
		View,
		TouchableOpacity} from 'react-native';
import OAuthSimple from 'oauthsimple';

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			position:"unknown"
		}
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position});
      },
      (error) => console.log(error),
      {enableHighAccuracy:true, timeout:20000, maximumAge:1000}
    );
  }

  fetchData(){
    console.log("FETCHING");
    const lat = this.state.position.coords.latitude
    const lng = this.state.position.coords.longitude
    const latlng = "ll=" + String(lat) + "," + String(lng)
    const consumerKey = "pNHSPkRWtUBsutn-2qDzEg";
    const tokenSecret = "mm0fj3Enir0zj0-plwFdb7m9S8o";
    const consumerSecret = "tPU7sVS59pBBJbM6Zvbc2MU3ryo";
    const token = "IsQcDUoRY3zHVtac5Rrbs719bdtuuKDE";
    const oauth = new OAuthSimple(consumerKey, tokenSecret)
    const request = oauth.sign({
        action: "GET",
        path: "https://api.yelp.com/v2/search",
        parameters: "term=coffee&" + latlng,
        signatures: {api_key: consumerKey, shared_secret: consumerSecret, access_token: token,
        access_secret: tokenSecret},
      })
    const nav = this.props.navigator
    fetch(request.signed_url, {method: "GET"}).then(function(response){
            return response.json()
      }).then(function(data){
      		console.log("DATA",data);
            nav.push({
            	ident:"Results",
            	data:data
            })
      }).catch(function(error){
      	if(error === null || error === undefined){
      		console.log('NULL HERE');
      	}
        console.error(error);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          CoffeeFinder
        </Text>
        <TouchableOpacity onPress={this.fetchData}>
          <Text>Find Coffee</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    marginBottom: 30
  }
});
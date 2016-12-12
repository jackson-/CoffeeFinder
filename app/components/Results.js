import React, {Component} from 'react';
import {StyleSheet,
		Text,
		View,
		ListView,
    Linking,
    Image,
		TouchableOpacity} from 'react-native';
import OAuthSimple from 'oauthsimple';

export default class Search extends Component {
	constructor(props){
		super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      results: dataSource.cloneWithRows(props.data.businesses)
    }
	}

  renderResult(result){
    return(
      <TouchableOpacity style={styles.resultRow} onPress={() => Linking.openURL(result.url)}>
        <Image source={{uri:result.image_url}} style={{width:80, height:80, justifyContent:'flex-start'}} />
        <View style={{flexDirection: 'column', justifyContent:'center'}}>
          <Text style={{fontWeight:'bold'}}>{`${result.name}`}</Text>
          <Text>Rating: {`${result.rating}`}</Text>
          <Text>Phone: {`${result.display_phone}`}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    console.log("RENDERING RESULTS")
    return (
      <View style={styles.container}>
        <ListView
          style={{marginTop:100}}
          initialListSize={10}
          dataSource={this.state.results}
          renderRow={(result) => {return this.renderResult(result)}} />
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
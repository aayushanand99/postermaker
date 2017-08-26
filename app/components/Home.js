import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import {
  StackNavigator,
} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from './navbar'
import Icon from 'react-native-vector-icons/Ionicons';
import { navigate } from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';


var that
const Albums=(<Icon name='ios-images-outline' size={70} color="#944143" style={{alignSelf:'center'}}/>)
const Unsplash=(<Icon name='md-camera' size={70} color="#944143" style={{alignSelf:'center'}}/>)
	var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
class Home extends Component{
	constructor(props){
		super(props)
		that=this
	}
	componentWillMount(){
		that=this
	}

	static navigationOptions ={
			header:(
					<Navbar leftIcon={"ios-information-circle-outline"} leftIconFunction ={()=>{that.props.navigate("Info")}} rightIcon={"ios-arrow-forward-outline"}/>
			)}
	selectImageFromGallery(){
		let source;
		ImagePicker.launchImageLibrary(options, (response)  => {
  			  console.log('Response = ', response);
			  if (response.didCancel) {
			    console.log('User cancelled image picker');
			  }
			  else if (response.error) {
			    console.log('ImagePicker Error: ', response.error);
			  }
			  else if (response.customButton) {
			    console.log('User tapped custom button: ', response.customButton);
			  }
			  else {
			    source = { uri: response.uri };
			    console.log(source);
			    setTimeout(()=>{
			    	if(source.uri)
			    		that.props.navigate("Preview",{ source })
				},1)
			}

		});
	}
	render(){
		that=this
		return(

			<LinearGradient colors={['#F5595B', '#E25457','#B0484A','#A74648', '#944143']} style={styles.linearGradient}  start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
				<View style={{flex:0.1,backgroundColor:'transparent'}}><Text style={{fontSize:40,textAlign:'center',fontFamily:'Didot',color:'#fff'}}>CREATE POST</Text></View>
				<View style={{flex:.6,alignItems:'flex-start',justifyContent:'flex-start',padding:40,backgroundColor:'transparent'}}>
					<View style={{flexDirection:'row',marginBottom:15,flex:0.5,backgroundColor:'transparent'}}>
						<TouchableHighlight onPress={()=>{that.selectImageFromGallery()}} style={styles.Dummy1}>
							<View>
							{Albums}
							<Text style={{fontSize:15,textAlign:'center'}}>ALBUMS</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight style={styles.Dummy2}>
							<View>
							{Unsplash}
							<Text style={{fontSize:15,textAlign:'center'}}>UNSPLASH</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={{flexDirection:'row',marginBottom:15,flex:0.5}}>
						<TouchableHighlight style={styles.Dummy3}>
							<Text numberOfLines={3} style={{fontSize:26,textAlign:'center',fontFamily:'Didot',color:'#fff'}}>
								Or{"\n"}Select{"\n"}Texture
							</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.Dummy2}>
						<View>
							{Albums}
							<Text style={{fontSize:15,textAlign:'center'}}>ALBUMS</Text>
						</View>
						</TouchableHighlight>
					</View>
				</View>
				<View style={{flex:0.3}}>
				</View>
			
			</LinearGradient>

			)
	}
}
const styles=StyleSheet.create({
	linearGradient: {
	    flex: 1,    
  	},
  	Dummy1:{
  		backgroundColor:'#fff',
  		padding:10,
  		flex:0.5,
  		marginRight:15
  	},
  	Dummy3:{
  		padding:10,
  		flex:0.5,
  		marginRight:15,
  		backgroundColor:'transparent'
  	},
  	Dummy2:{
  		backgroundColor:'#fff',
  		padding:10,
  		flex:0.5,
  	}
})
function mapStateToProps(state){
	//whatever is returned wil show up as props 

}
function mapDispatchToProps(dispatch){
	console.log("mapDispatchToProps"+dispatch)
	return bindActionCreators({navigate:navigate},dispatch)
}
export default connect(null,mapDispatchToProps)(Home)
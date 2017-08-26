import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import { ViewShot } from "react-native-view-shot";

// import '../../Assets/backgroundImage'
export default class Preview extends Component{
	constructor(props){
		super(props)
		this.state={imgSrc:null}
	}
	 onImageLoad () {
		this.refs.viewShot.capture().then(uri => {
		  console.log("do something with ", uri);
		  this.setState({imgSrc:{uri:uri}})
		})
	}		
	render(){
		let ImageSource=this.props.navigation.state.params.source
		return(<View>
			
			<ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }} style={{flex:0.5}}>
				<Image source={ImageSource} style={{flex:1,resizeMode:'contain',alignItems:'center',justifyContent:'center'}} onLoad={()=>this.onImageLoad}>
					<Text style={{backgroundColor:'transparent',color:'white'}}>
					Hello
					</Text>
				</Image>
			</ViewShot>
			<View style={{flex:0.5}}>
			<Image source={this.state.imgSrc}/></View>
			</View>
			)
	}
}
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button, View, Text, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
const { width, height} = Dimensions.get('window');

export default class Home extends Component{
    
    render(){
        var { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../assets/logo.png')} style={{width: 200, height: 90, marginTop: -30, resizeMode: 'contain'}} />
                <Text style={{fontSize: 30, fontWeight: "700"}}>원하시는 채널에 광고를 집행하세요.</Text>
                <Text style={{fontSize: 18, color: 'grey', marginTop: 13}}>구글 외 네이버, 페이스북, 인스타그램은 회원가입 후 이용가능합니다.</Text>
                
                <View style={{flexDirection: "row", marginTop: 30}}>
                    <TouchableOpacity style={{flex: 1}} activeOpacity={0.7} onPress={() => {
                        navigation.navigate('GoogleSearch');
                    }}>
                        <Image source={require('../../assets/gs.png')} style={{width: 200, height: 200}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} activeOpacity={0.7}>
                        <Image source={require('../../assets/gdn.png')} style={{width: 200, height: 200}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} activeOpacity={0.7}>
                        <Image source={require('../../assets/youtube.png')} style={{width: 200, height: 200}} />
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 18, color: 'grey', marginTop: 13, marginTop: 30}}>체험을 통해 예상되는 광고 성과를 확인해보세요.</Text>
            </View>
          );
    }
}
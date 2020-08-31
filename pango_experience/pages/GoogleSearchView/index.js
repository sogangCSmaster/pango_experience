import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { Button, View, Text, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { title } from 'process';
const { width, height} = Dimensions.get('window');

export default class GoogleSearchView extends Component{
    state = {
        campaign: '',
        landingpage: '',
        titleA: '',
        titleB: '',
        titleC: '',
        descriptionD: '',
        descriptionE: '',
        phone: ''
    }
    _changeTitle = (text) => {
        this.setState({
            campaign: text
        })
    }
    _changeURL = (text) => {
        this.setState({
            landingpage: text
        })
    }
    _changeA = (text) => {
        this.setState({
            titleA: text
        })
    }
    _changeB = (text) => {
        this.setState({
            titleB: text
        })
    }
    _changeC = (text) => {
        this.setState({
            titleC: text
        })
    }
    _changeD = (text) => {
        this.setState({
            descriptionD: text
        })
    }
    _changeE = (text) => {
        this.setState({
            descriptionE: text
        })
    }
    _changePhone = (text) => {
        this.setState({
            phone: text
        })
    }
    render(){
        var { campaign, landingpage, titleA, titleB, titleC, descriptionD, descriptionE, phone } = this.state;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', width: width }}>
                <Text style={{marginTop: 40, fontSize: 30, fontWeight: "bold"}}>구글 검색 광고 세팅</Text>
                <View style={{flexDirection: "row", width: width/2}}>
                    <View style={{flex: 1 }}>
                        <Text style={{fontWeight: '600', fontSize: 19, color: '#333333'}}>광고 캠페인</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10 }}
                            placeholder={"캠페인명을 입력하세요."}
                            onChangeText={text => this._changeTitle(text)}
                            value={campaign}
                        />
                        <Text style={{fontWeight: '600', fontSize: 19, color: '#333333', marginTop: 30}}>웹사이트 주소</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10 }}
                            placeholder={"URL을 입력하세요 (https://website.com)"}
                            onChangeText={text => this._changeURL(text)}
                            value={landingpage}
                        />
                        <Text style={{fontWeight: '600', fontSize: 19, color: '#333333', marginTop: 30}}>광고 문구 설정</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10 }}
                            placeholder={"광고 제목 A"}
                            value={titleA}
                            onChangeText={text => this._changeA(text)}
                            maxLength={20}
                        />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10, marginTop: 10 }}
                            placeholder={"광고 제목 B"}
                            value={titleB}
                            onChangeText={text => this._changeB(text)}
                            maxLength={20}
                        />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10, marginTop: 10 }}
                            placeholder={"광고 제목 C"}
                            value={titleC}
                            onChangeText={text => this._changeC(text)}
                            maxLength={20}
                        />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10, marginTop: 10 }}
                            placeholder={"광고 설명 입력 D"}
                            value={descriptionD}
                            onChangeText={text => this._changeD(text)}
                        />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10, marginTop: 10 }}
                            placeholder={"광고 설명 입력 E"}
                            value={descriptionE}
                            onChangeText={text => this._changeE(text)}
                            maxLength={30}
                        />
                        <Text style={{fontWeight: '600', fontSize: 19, color: '#333333', marginTop: 30}}>연락처 입력 (선택사항)</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 0.1, width: width/4 - 20, outlineColor: 'orange', paddingLeft: 10}}
                            placeholder={"010-0000-0000"}
                            value={phone}
                            onChangeText={text => this._changePhone(text)}
                            maxLength={30}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontWeight: '600', fontSize: 19, color: '#333333'}}>광고 미리보기</Text>
                        <View style={[styles.shadow, {backgroundColor: 'white'}]}>
                            <Text><Text style={{fontWeight: '700'}}>광고 •</Text> {landingpage}</Text>
                            <Text style={{fontSize: 20, color: '#1a0dab', marginTop: 8}}>{titleA || '광고 제목 A'} | {titleB || '광고 제목 B'} | {titleC || '광고 제목 C'}</Text>
                            <Text style={{marginTop: 5}}>{descriptionD} {descriptionE}</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.7}>
                    <View style={[styles.shadow, {backgroundColor: '#F1766A', width: 100, height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 15, borderRadius: 10}]}>
                        <Text style={{color: 'white'}}>확인</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    shadow: {
        padding: 10,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
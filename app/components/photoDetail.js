import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';
import LoadComments from '../components/LoadComments';
import CommentForm from '../components/CommentForm';
import { baseUrl } from '../reduxMain/baseUrl';

const PhotoDetail = (props) => {
    return (
        <View style={styles.up}>
            <Image source={baseUrl + props.photo.image} style={styles.image}/>
            <View style={styles.bodyview}>
                <Text style={styles.firsttext}>{props.photo.name}</Text>
                <Text style={styles.secondtext}>{props.photo.description}</Text>
                
                <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading}></LoadComments>
                
                <CommentForm photoId={props.photo.id} addComment={props.addComment}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    up: {
        marginTop: "10px",
    },
    bodyview: {
        textAlign: "left",
    },
    firsttext:{
        fontSize: 10,
    },
    secondtext: {
        fontSize: 8,
    }
})

export default PhotoDetail;
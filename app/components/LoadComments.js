import React from 'react';
import {View, Text} from 'react-native';
import dateFormat from 'dateformat';
import Loading from './Loading';
const LoadComments = props => {
    if (props.commentIsLoading) {
        return <Loading />;
    } else {
        return (
            props.comments.map(comment => {
                return (
                    <View key={comment.id}>
                        <Text style={{ color: "#4a54f1", fontSize: 15, textAlign: "center" }}>{comment.author}</Text>
                        <Text style={{ color: "black", fontSize: 10, }}>{comment.comment}</Text>
                        <Text style={{ color: "#4a54f1", fontSize: 8, paddingTop: ".5px" }}>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</Text>
                    </View>
                );
            })

        );
    }

}

export default LoadComments;
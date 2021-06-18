import React from 'react';
import {View, StyleSheet, Image, Text } from 'react-native';
import { baseUrl } from '../redux/baseUrl';
const BookItem = props => {

    return (
        <div>
                <View style={styles.container}>
                    <Image 
                    width="100%" 
                    alt={props.photo.name} 
                    src={baseUrl + props.photo.image} />
                        <Text
                            style={{color: "#FF5733", cursor: "pointer", fontSize: "small", fontWeight: "20", padding:"1px",}} 
                            onClick={props.PhotoSelect}
                        >{props.photo.name}
                        </Text>
                </View>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 80,
        height: 80,
    },
    name: {
        fontWeight: "500",
    }
})

export default BookItem;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DishDetailScreen = props => {
    const dish = props.route.params.dish;
    return (
        <View>
            <Image source={{ uri: dish.image }} style={styles.image} />
            <View style={styles.details}>
                <Text>{dish.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
    },
    name: {
        fontSize: 20,
        fontWeight: "500",
    },
    details: {
        padding: 10,
    }
})

export default DishDetailScreen;
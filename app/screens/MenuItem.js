import React from 'react';
import { View, Image, Text } from 'react-native';
import { baseUrl } from '../components/redux/baseUrl';

// import CardImg from 'reactstrap/lib/CardImg';

const MenuItem = props => {
    return (

        <View>
            <View>
            <View>
            <Image 
                width="100%" 
                alt={props.dish.name} 
                source={baseUrl + props.dish.image} 
                style={ {opacity: "0.5"} }/>                
            <View>
                    <Text>{props.item.name}</Text>
                    <Text onClick={props.PhotoSelect}>{props.dish.name}</Text>
                </View>
            </View>
            </View>
        </View>
    );
}


export default MenuItem;
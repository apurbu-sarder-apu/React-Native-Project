import React from 'react';
import { Text, View, Image } from 'react-native';
import LoadComments from '../components/LoadComments';
import CommentForm from '../components/CommentForm';

const DishDetail = props => {
    return (
        <div>
            <View style={{ marginTop: "10px" }}>
            {props.item.image && <Image source={{ uri: props.item.image }} style={styles.image} />}
                <View style={{ textAlign: "left" }}>
                    <Text>{props.dish.name}</Text>
                    <Text>
                        {props.dish.description}
                    </Text>
                    <Text>
                        Price: {props.dish.price}/-
                    </Text>
                    <hr />
                    <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading}></LoadComments>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </View>
            </View>
        </div>
    );
}

export default DishDetail;
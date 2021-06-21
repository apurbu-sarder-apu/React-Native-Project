import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../components/redux/actionCreators';
import Loading from './Loading'
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, 
        rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())

    }
}



class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState({ 
            selectedDish: dish,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }


    render() {
        // document.title = "Menu";

        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else if(this.props.dishes.errMess!=null){
            return (
                <Text>Error</Text>
            )
        }
        else{
                    const menu = this.props.dishes.dishes.map(item => {
            return (
                <MenuItem 
                dish={item} 
                key={item.id}
                DishSelect={()=>this.onDishSelect(item)}
            />
            );
        })
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.comments.filter(comment => 
                comment.dishId === this.state.selectedDish.id
            )
            dishDetail = <DishDetail 
            dish={this.state.selectedDish} 
            comments = {comments}
            addComment={this.props.addComment}
            commentsIsLoading={this.props.comments.isLoading}/>
        }


        return (
            <View>
                <View>
                    <View>
                        {menu}
                    </View>
                    <View isOpen={this.state.modalOpen}>
                        <View>
                            {dishDetail}
                        </View>
                        <View>
                            <Button color="secondary"onClick={this.toggleModal} title="Close" />

                        </View>
                    </View>
                </View>
            </View>
        );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
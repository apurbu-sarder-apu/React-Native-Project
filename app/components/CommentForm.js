import React, { Component } from 'react';
import { View, Button, TextInput} from 'react-native';


class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        //console.log(this.state);
        this.props.addComment(this.props.dishId, this.state.author, this.state.comment);
        this.setState({
                author: '',
                comment: ''
        })

        event.preventDefault();
    }


    render(){
        //console.log(this.props);
        return(
            <View>
                <View onSubmit={this.handleSubmit}>
                    <TextInput 
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="Your Name"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <TextInput 
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleInputChange}
                        required></TextInput>
                        <br/>
                        <Button type="submit">Submit Comment</Button>
                </View>
            </View>
        )
    }
}

export default CommentForm;
import React, { Component } from 'react';
import BookItem from './BookScreen';
import PhotoDetail from '../components/photoDetail';
import { View, Button, Alert } from 'react-native';
// import { CardColumns, Modal, ModalBody, ModalFooter, Button, Alert} from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchPhotos, fetchComments } from '../redux/actionCreators';
import Loading from '../components/Loading';


const mapStateToProps = state => {
    return {
        photos: state.photos,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addComment: (photoId, author, comment) => dispatch(addComment(photoId, author, comment)),
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Menu extends Component {
    state = {
        selectedPhoto: null,
        modalOpen: false
    }

    onPhotoSelect = photo => {
        console.log(photo);
        this.setState({ selectedPhoto: photo,
        modalOpen: !this.state.modalOpen
        });

    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu";
        if (this.props.photos.isLoading) {
            return (
                <Loading />
            );
        }
        else if(this.props.photos.errMess!=null){
            return (
                <Alert color="danger">{this.props.photos.errMess}</Alert>
            )
        }
        else {
            const menu = this.props.photos.photos.map(item => {
                return (
                    <BookItem 
                        photo={item} 
                        key={item.id}
                        PhotoSelect={() => this.onPhotoSelect(item)}
                        />
                );
            })
            let photoDetail = null;
            if(this.state.selectedPhoto!=null) {
                const comments = this.props.comments.comments.filter(comment => comment.photoId === this.state.selectedPhoto.id)
                photoDetail = <PhotoDetail 
                photo={this.state.selectedPhoto}
                comments={comments}
                addComment={this.props.addComment}
                commentsIsLoading={this.props.comments.isLoading} />
            }
            return (
                <div className="container">
                    <div className="row">
                        <View className="col-12">
                            {menu}
                        </View>
                        <View isOpen={this.state.modalOpen}>
                            <View>
                                {photoDetail}
                            </View>
                            <View>
                                <Button color="secondary" onClick={this.toggleModal}>
                                    Close    
                                </Button>    
                            </View>        
                        </View>
    
    
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
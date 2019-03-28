import React, { Component } from 'react';
import './dnd.css';



class DragAndDrop extends Component {
    state = {
        dragging: false,
        data: ''
    };

    dropRef = React.createRef();

    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({dragging: true})
        }
    };

    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation();this.dragCounter--;
        if (this.dragCounter > 0)
            return;
        this.setState({dragging: false})
    };

    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({drag: false});
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            this.props.handleDrop(e.dataTransfer.files)
            e.dataTransfer.clearData()
            this.dragCounter = 0
        }
    };

    handleChange(event) {
        this.setState({data: URL.createObjectURL(event.target.files[0])});
        console.log('change' + this.state.data);
    }

    componentDidMount() {
        this.dragCounter = 0;
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn);
        div.addEventListener('dragleave', this.handleDragOut);
        div.addEventListener('dragover', this.handleDrag);
        div.addEventListener('drop', this.handleDrop);
    }
    componentWillUnmount() {
        let div = this.dropRef.current;
        div.removeEventListener('dragenter', this.handleDragIn);
        div.removeEventListener('dragleave', this.handleDragOut);
        div.removeEventListener('dragover', this.handleDrag);
        div.removeEventListener('drop', this.handleDrop);
    }
    render() {
        return (
            <div ref={this.dropRef}>
                {this.props.children}
            </div>
        )
    }
}
export default DragAndDrop
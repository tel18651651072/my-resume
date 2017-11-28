import React,{Component} from 'react'
import './Style.css'

class Dialog extends Component {
    constructor(...props) {
        super(...props);

        [
            '_onBlurHandler',
            '_onClickHandler'
        ].forEach(func => {
            this[func] = this[func].bind(this);
        });
    }

    _onBlurHandler(e) {
        this.props.onBlur&& this.props.onBlur(e);
    }

    _onClickHandler(e) {
        e.nativeEvent.stopImmediatePropagation();
    }

    componentDidMount() {
        document.addEventListener('click',this._onBlurHandler,false)
    }

    componentWillUnmount() {
        document.removeEventListener('click',this._onBlurHandler,false)
    }

    render() {
        const className = [
            'dialog',
            this.props.className
        ].join(' ')

        return (
            <div
                className = {className}
                onClick = {this._onClickHandler}>
                {this.props.children}
            </div>
        )
    }
}

Dialog.propTypes = {
    onBlur:React.PropTypes.func
}

export default Dialog
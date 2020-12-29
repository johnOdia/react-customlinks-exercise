import React, {Component} from 'react'

export class CustomLinks extends Component{
    render() {
        return <li><a className='li' href={this.props.href} onClick={this.props.onClick} target='_blank'>{this.props.text}</a></li>
    }
}
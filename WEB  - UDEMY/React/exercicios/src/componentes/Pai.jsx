import React from 'react'

function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { 
        ...props, ...child.props 
        })
    })
}
// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
              childrenWithProps(props)  
            }
        </ul>
    </div>
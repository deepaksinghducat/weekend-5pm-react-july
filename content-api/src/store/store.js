import React from 'react';

const NameContext = React.createContext({
    name: "fasfdsa",
    click: () => { }
})

export const NameContextProvider = (props) => {

    const clickMe = () => {
        console.log('click me');
    }

    const nameObj = {
        name: "deepak",
        click: clickMe
    }

    return <NameContext.Provider value={nameObj} >
                {props.children} 
            </NameContext.Provider>
}

export default NameContext;
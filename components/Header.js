import React from 'react';
import {Header} from "@rneui/themed";

export default function MenuBar() {
    return (
        <Header
            backgroundColor="#5f9ea0"
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Home', style: { color: '#fff' } }}
        />
    );
}
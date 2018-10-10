import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default CountComponent = (props) => {
    const {value} = props;
    return (
        <Text style={viewCountComponentStyles.main}>
            {value}
        </Text>
    );
};

const viewCountComponentStyles = StyleSheet.create({
    main: {
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
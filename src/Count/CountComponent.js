import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './CountComponent.styles';

export default class CountComponent extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { value } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.value}>
                    {value}
                </Text>
            </View>
        );
    }
};
import React from 'react'
import { View, StyleSheet } from 'react-native';

export const Expanded = (props) => {
    return (
        <View style={[props.style, styles.container]} testID={props.testID ?? 'component-expanded'}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
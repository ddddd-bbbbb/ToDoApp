import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>성공했습니다!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // 배경색 설정
    },
    text: {
        fontSize: 24,
    },
});

export default HomeScreen;
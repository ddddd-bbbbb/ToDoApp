import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomePage from './components/HomePage'; // 홈 페이지 컴포넌트 추가

export default function App() {
    return (
        <View style={styles.container}>
            <HomePage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
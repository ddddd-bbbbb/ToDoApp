//app/index.tsx
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const HomeScreen = () => {
    const handleLogin = () => {
        console.log("로그인 버튼 클릭");
    };

    const handleRegister = () => {
        console.log("회원가입 버튼 클릭");
    };

    const handleSocialLogin = (provider) => {
        console.log(`${provider}로 로그인`)
        //실제 소셜 로그인 로직 추가
    }

    return (
        <LinearGradient
            colors={['#F4EEFF', '#DCD6F7']} // 전체 배경 그라디언트
            style={styles.container}
        >
            <Text style={styles.title}>Welcome to my app!</Text>
            <Text style={styles.subtitle}>당신의 할 일을 계획하고 관리하세요.</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.buttonText}>회원가입</Text>
                </TouchableOpacity>
                <Text style={styles.socialLoginText}>소셜 로그인</Text>
                <TouchableOpacity
                    style={styles.socialLoginButton}
                    onPress={() => handleSocialLogin('Google')}
                >
                    <Text style={styles.buttonText}>Google로 로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.socialLoginButton}
                    onPress={() => handleSocialLogin('FaceBook')}
                >
                    <Text style={styles.buttonText}>FaceBook으로 로그인</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#424874', // 진한 색상
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#A6B1E1', // 부드러운 색상
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginButton: {
        borderRadius: 15,
        width: '80%',
        height: 50,
        marginVertical: 10,
        backgroundColor: '#F4EEFF', // 로그인 버튼 배경 색상
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButton: {
        borderRadius: 15,
        width: '80%',
        height: 50,
        marginVertical: 10,
        backgroundColor: '#DCD6F7', // 회원가입 버튼 배경 색상
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialLoginText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#424874',
        marginBottom: 20,
    },
    socialLoginButton: {
        borderRadius: 15,
        width: '80%',
        height: 50,
        marginVertical: 10,
        backgroundColor: '#A6B1E1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#424874', // 텍스트 색상
    },
});

export default HomeScreen;
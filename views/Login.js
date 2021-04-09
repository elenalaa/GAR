import React, {useContext} from "react";
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    Button,
    ImageBackground,
    
} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";



const Login = (props) => { // props is needed for navigation
    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);
    console.log('ili', isLoggedIn);
    const logIn = () => {
        setIsLoggedIn(true);
        if (isLoggedIn) {  // this is to make sure isLoggedIn has changed, will be removed later
            props.navigation.navigate('Home');
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Button style={styles.button} title="Sign in!" onPress={logIn}  />
            {/* <ImageBackground
                source={require("../assets/LogoLogo.png")} style={styles.ImageBackground}>
               <Text style={styles.text}>Login</Text>
                
            </ImageBackground>  */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        
    },

    ImageBackground:{
        flex: 1,
        resizeMode: "cover",
        height: "100%",
        width: "100%",
        justifyContent: "center",
    }, 
    text: {
        color: "white",
        fontSize: 24,
        padding: '8',
        textAlign: "center",
        backgroundColor: "#000000a0",
       // width:'49%',
        justifyContent:"center",
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 4,
        marginHorizontal: "1%",
        marginBottom: 6,
        width: "48%",
        textAlign: "center",
    },
       
});

Login.propTypes = {
    navigation: PropTypes.object,
};

export default Login;
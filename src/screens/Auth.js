import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/auth/auth_design";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../context/Context";
import Loading from "../components/Global/Loading";

const Auth = () => {
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();
  const { user, setUser } = React.useContext(ContexStore);
  if (user.length > 0) {
    return navigation.navigate("Mero Room");
  }
  const fetchUser = async () => {
    // fetch the login user data from the firebase
  };
  const storeData = async () => {
    // check if data is already exist in db, and perform login and register
  };
  const googleLogin = async () => {
    // perform google login
  };

  return (
    <>
      {loading && <Loading data="Please Wait" />}
      <View style={styles.main_ontainer}>
        <View style={styles.brand_con}>
          <Image
            style={{
              height: 160,
              width: 160,
              // borderRadius: 500,
              alignSelf: "center",
            }}
            source={require("../../assets/img/logo.png")}
          />
          <Text style={styles.brand_name}>Mero Room</Text>
        </View>
        <View style={styles.footer_con}>
          <Pressable onPress={googleLogin} style={styles.btn}>
            <Image
              style={styles.btn_img}
              source={require("../../assets/svg/google.png")}
            />
            <Text style={styles.login_text}>Continue with Google</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Image
              style={styles.btn_img}
              source={require("../../assets/svg/fb.png")}
            />
            <Text style={styles.login_text}>Continue with Facebook</Text>
          </Pressable>
          <View style={styles.terms}>
            <Text>By continuing you aggree our</Text>
            <Text Text style={styles.contitions_link}>
              Terms and condition
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Auth;

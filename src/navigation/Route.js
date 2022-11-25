import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {
  ToastAndroid,
  LogBox,
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import moment from "moment";

// icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import {
  OleoScriptSwashCaps_400Regular,
  OleoScriptSwashCaps_700Bold,
} from "@expo-google-fonts/oleo-script-swash-caps";

// pages
import AppLoading from "expo-app-loading";
import Search from "../screens/Search";
import Auth from "../screens/Auth";
import Post from "../screens/Post";
import Home from "../screens/Home";
import Explore from "../screens/Explore";
import Myroom from "../screens/Myroom";

export default function Route() {
  const skeleton =
    "https://scontent.fbwa3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JnDLo_5PpjYAX8cG4vv&_nc_oc=AQmdU2hM-Q3jsox61SGyJovD3ROHCMzHtMpTPXZNREEXG3AwBGDk475naer2wpodQ1o&tn=jOFtfr9vq0GDmmko&_nc_ht=scontent.fbwa3-1.fna&oh=00_AT-XDUZmFAck3kLBwdCWYvigPPD4PkhYN01zNexQ-Ca4uA&oe=62970D78";
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  // use the fonts
  let [fontsLoaded] = useFonts({
    200: Poppins_200ExtraLight,
    300: Poppins_300Light,
    400: Poppins_400Regular,
    500: Poppins_500Medium,
    600: Poppins_600SemiBold,
    700: Poppins_700Bold,
    999: OleoScriptSwashCaps_700Bold,
    888: OleoScriptSwashCaps_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createNativeStackNavigator();

  const upload = () => {
    // upload the room's code goes here
  };
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            animation: "fade",
            headerShown: true,
            headerRight: () => (
              <>
                <View style={header.wrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      if (user?.length === 1) {
                        navigation.navigate("Profile");
                      } else {
                        navigation.navigate("Auth");
                      }
                    }}
                    style={header.headerImg}
                  >
                    {user.length > 0 ? (
                      <Image
                        style={header.avatar}
                        source={{
                          uri: user[0]?.photoUrl,
                        }}
                      />
                    ) : (
                      <Image
                        style={header.avatar}
                        source={{
                          uri: skeleton,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </>
            ),
            headerStyle: {
              backgroundColor: "#fff",
              height: 65,
            },
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "500",
              color: "rgba(0, 0, 0, 1)",
              fontSize: 28,
              marginLeft: 6,
              fontFamily: "888",
            },
          }}
          name="Mero Room"
          component={Home}
        />
        <Stack.Screen
          options={{
            animation: "fade",
            headerShadowVisible: false,
            headerShown: true,
            headerStyle: {
              elevation: 0,
              borderBottomColor: "#efefef",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "500",
            },
          }}
          name="Explore"
          component={Explore}
        />
        <Stack.Screen
          options={{
            animation: "slide_from_bottom",
            headerShown: true,
            headerStyle: {
              elevation: 0,
              borderBottomColor: "#Dfdfdf",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "500",
              marginLeft: -5,
              marginTop: 4,
              fontSize: 18,
            },
            headerRight: () => (
              <Pressable onPress={() => upload()}>
                <Text style={header.btn_post}>Post</Text>
              </Pressable>
            ),
          }}
          name="Post"
          component={Post}
        />
        <Stack.Screen
          options={{
            animation: "fade",
            headerShadowVisible: true,
            headerShown: true,
            headerStyle: {
              borderBottomColor: "#Dfdfdf",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "500",
              marginLeft: -5,
              marginTop: 4,
              fontSize: 18,
            },
          }}
          name="MyRoom"
          component={Myroom}
        />

        <Stack.Screen
          options={{ headerShown: false, animation: "slide_from_bottom" }}
          name="Auth"
          component={Auth}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
          }}
          name="Detail"
          component={Detail}
        />

        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            animation: "slide_from_right",
            headerStyle: {
              elevation: 0,
              borderColor: "dfdfdf",
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              fontFamily: "500",
              color: "rgba(0, 0, 0, 1)",
              fontSize: 15,
            },
            headerShadowVisible: true,
          }}
        />
      </Stack.Navigator>

      <StatusBar backgroundColor={"#333"} />
    </>
  );
}

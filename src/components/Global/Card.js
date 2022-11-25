import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "../../styles/Global/card_design";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../../context/Context";

export default function Card({ data, check }) {
  const { user } = useContext(ContexStore);
  const navigation = useNavigation();
  const { address, rate, user_profile, oprn_id } = data;
  const { thumbnail } = data;

  return (
    <>
      <View
        style={{
          width: check ? wp("90%") : wp("80%"),
          height: 210,
          marginRight: check ? 0 : 25,
          marginVertical: check ? 10 : 0,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Detail", {
              room_id: oprn_id,
            });
          }}
        >
          <Image
            source={{
              uri: thumbnail && thumbnail[0],
            }}
            style={styles.img}
          />
        </TouchableWithoutFeedback>
        <View style={styles.img_des}>
          <View style={styles.left}>
            <View style={styles.avatar_con}>
              <Image
                style={styles.avatar}
                source={{
                  uri: user_profile,
                }}
              />
            </View>
            <View>
              <Text style={styles.dec_address}>{address}</Text>
              <Text style={styles.dec_price}>Rs. {rate}</Text>
            </View>
          </View>

          <AntDesign
            name={inFav ? "heart" : "hearto"}
            size={30}
            color={inFav ? "#E35A5A" : "white"}
          />
        </View>
      </View>
    </>
  );
}

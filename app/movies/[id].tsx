import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const MovieDetails = () => { 
    const { id } =  useLocalSearchParams();

    return (
        <view>
            <text>Movie Details Screen{id}</text>
        </view>
    )
}
export default MovieDetails;
const Style = StyleSheet.create({})
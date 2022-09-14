import React from "react";
import { View, StyleSheet } from "react-native";
import TopTreeItem from "./TopTreeItem";
import imageTeste from '../../../assets/logo.png'


export default function Head() {
    return <>
        <View style={styles.container}>
            <View style={styles.viewMarginal}>
                <TopTreeItem
                    image={imageTeste}
                    name={"Rebeca"}
                    place={"2"}
                    xp={"74"}
                />
            </View>

            
            <TopTreeItem
                image={imageTeste}
                name={"Gabriel"}
                place={"1"}
                xp={"85"}
            />

            <View style={styles.viewMarginal}>
                <TopTreeItem
                    image={imageTeste}
                    name={"Iury"}
                    place={"3"}
                    xp={"67"}
                />
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: "center"
    },
    viewMarginal: {
        marginTop: 25,
        marginRight:64,
        marginLeft:64
    }
})
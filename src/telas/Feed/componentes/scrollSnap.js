import React, {useState} from "react";
import { Image, View, FlatList, StyleSheet, Dimensions} from "react-native";

//Scroll de imagens do anunciantes na pagina catador

//Import das imagens
import coleta1 from '../../../assets/coleta1.jpg'
import coleta2 from '../../../assets/coleta2.jpg'

const {width} = Dimensions.get('window');

const imagens = [
    {
        id: 1,
        url: 'coleta1',
        //title: '',
    }, 
    {
        id: 2,
        url: 'coleta2',
        //title: '',
    },
]


const OnBoardingItem = ({item}) => {
    return(
        <Image source={{uri:item.url}}/>
    )
}


export default function ScrollSnap({imagens}) {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <View>
            <FlatList
                data = {imagens}
                style={styles.imagem}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={(event) => {
                    setActiveIndex(parseInt(event.nativeEvent.contentOffset.x/width))
                }}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator = {false}
                decelerationRate = "fast"
                keyExtractor = {(item) => String(item?.id)}
                renderItem = {({item}) => <OnBoardingItem item={item}/>}
            />
            {
                imagens.length > 1 ? 
                <View style={styles.dotsContainer}>
                    {
                        imagens.map((_, i) => (
                            <View
                                style = {[styles.dot, {backgroundColor: i === activeIndex ? 'blue' : 'grey'}]}
                            />
                        ))
                    }
                </View>
                : null
            }
        </View>
    )        
}


const styles = StyleSheet.create({
    container:{
    },
    imagem:{
        width,
        height: width,
        borderRadius: 10,
        maxHeight: width, 
    },
    dotsContainer: {
        flex: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 1
    }

})
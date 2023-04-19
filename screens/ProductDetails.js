import { Image, StyleSheet,Text, View,FlatList, useWindowDimensions, Pressable } from "react-native";
import products from '../src/data/products'
import { ScrollView } from "react-native-gesture-handler";

const ProductDetails = () => {
  const product = products[0];
  const {width} = useWindowDimensions();

  return (
    <View>
      
      <FlatList
        data={product.images}
        renderItem={({item}) => (
        <Image
          source={{uri:item}}
          style={{width, aspectRatio:1}}
        />
        )}

        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <ScrollView>
      <View style={{padding:20}}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    fontSize:34,
    fontWeight:'500',
    marginVertical:10
  },
  price:{
    fontWeight:'500',
    fontSize:16,
  },
  description:{
    marginVertical:10,
    fontSize:18,
    lineHeight:30,
    fontWeight:'300',
  }
});

export default ProductDetails;
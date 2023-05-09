import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Linking,
} from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CartListItem from "../components/CartListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
  cartSlice,
} from "../store/cartSlice";
import {
  useCreateOrderMutation,
  useCreatePaymentIntentMutation,
} from "../store/apiSlice";
import { selectedProduct } from "../store/productsSlice";
import { useLinkTo, useNavigation } from "@react-navigation/native";
import Dialog from "react-native-dialog";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>${subtotal}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>${deliveryFee}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>${total}</Text>
      </View>
    </View>
  );
};

const Cart = () => {
  const navigation = useNavigation();
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  // const products = useSelector(selectedProduct);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const [createOrder, { data, error, isLoading }] = useCreateOrderMutation();
  const [useCreatePaymentIntent] = useCreatePaymentIntentMutation();

  const pay = () => {
    navigation.navigate("Pay", { paramKey: response });
  };

  const onCheckout = async () => {
    // 1. Create a payment intent
    const response = await useCreatePaymentIntent({
      amount: Math.floor(total * 100),
    });

    if (response.error) {
      Alert.alert("Something went wrong");
      return;
    }
    console.log(response);

    if (response.data) {
      Alert.alert(
        "Continue to Checkout",
        `Order Link: ${response.data.response}`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          // {text: 'Continue', onPress: () => pay()},
          {
            text: "Continue",
            onPress: () =>
              navigation.navigate("Pay", { paramKey: response.data.response }),
          },
        ]
      );
    }
    onCreateOrder();
  };

  const onCreateOrder = async () => {
    const result = await createOrder({
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      customer: {
        name: "customer name",
        address: "customer address",
        email: "customer email",
      },
    });

    if (result.data?.status === "ok") {
      // Alert.alert(
      //     'Your Order has been created',
      //     `Your order reference is: ${result.data.data.ref}`
      // );
      dispatch(cartSlice.actions.clear());
    }
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <TouchableOpacity style={styles.button} onPress={onCheckout}>
        <Text style={styles.buttonText}>
          Checkout
          {isLoading && <ActivityIndicator />}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gray",
    borderTopWidth: 0.2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },

  text: {
    fontSize: 16,
    color: "gray",
  },

  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },

  button: {
    position: "absolute",
    backgroundColor: "black",
    // top:'63%',
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 25,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default Cart;

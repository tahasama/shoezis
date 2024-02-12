import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Home = ({ navigation }) => {
  // Dummy data for featured collections
  const featuredCollections = [
    {
      id: 1,
      title: "Spring Collection",
      image: require("../../../../assets/Images/home/spring.png"),
    },
    {
      id: 2,
      title: "Limited Edition",
      image: require("../../../../assets/Images/home/limited.png"),
    },
    // Add more featured collections as needed
  ];

  // Dummy data for trending styles
  const trendingStyles = [
    {
      id: 1,
      title: "Casual Sneakers",
      image: require("../../../../assets/Images/home/casual.jpg"),
    },
    {
      id: 2,
      title: "Formal Classics",
      image: require("../../../../assets/Images/home/formal.jpg"),
    },
    // Add more trending styles as needed
  ];

  // Dummy data for brand spotlights
  const brandSpotlights = [
    {
      id: 1,
      name: "Nike",
      image: require("../../../../assets/Images/home/nike.png"),
    },
    {
      id: 2,
      name: "Adidas",
      image: require("../../../../assets/Images/home/adidas.png"),
    },
    // Add more brand spotlights as needed
  ];

  // Dummy data for promotions
  const promotions = [
    {
      id: 1,
      title: "50% Off Spring Collection",
      image: require("../../../../assets/Images/home/formal.jpg"),
    },
    {
      id: 2,
      title: "Limited Time Offer - Free Shipping",
      image: require("../../../../assets/Images/home/formal.jpg"),
    },
    // Add more promotions as needed
  ];

  // Dummy data for new arrivals
  const newArrivals = [
    {
      id: 1,
      name: "Summer Sandals",
      image: require("../../../../assets/Images/home/formal.jpg"),
    },
    {
      id: 2,
      name: "Athletic Running Shoes",
      image: require("../../../../assets/Images/home/formal.jpg"),
    },
    // Add more new arrivals as needed
  ];

  // Dummy data for quick links in the footer
  const quickLinks = [
    { id: 1, title: "Shop", route: "Shop" },
    { id: 2, title: "Favorites", route: "Favorites" },
    { id: 3, title: "Cart", route: "Cart" },
    { id: 4, title: "Profile", route: "Profile" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        {/* Include your search bar component here */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search for shoes..."
          // Implement your search functionality here
        />
      </View>

      <Text style={styles.sectionTitle}>Promotions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {promotions.map((promotion) => (
          <TouchableOpacity
            key={promotion.id}
            style={styles.promotionItem}
            onPress={() =>
              navigation.navigate("Shop", { promotionId: promotion.id })
            }
          >
            <Image source={promotion.image} style={styles.promotionImage} />
            <Text style={styles.promotionTitle}>{promotion.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>New Arrivals</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {newArrivals.map((arrival) => (
          <TouchableOpacity
            key={arrival.id}
            style={styles.newArrivalItem}
            onPress={() =>
              navigation.navigate("Shop", { arrivalId: arrival.id })
            }
          >
            <Image source={arrival.image} style={styles.newArrivalImage} />
            <Text style={styles.newArrivalName}>{arrival.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.footerTitle}>Quick Links</Text>
      <View style={styles.quickLinksContainer}>
        {quickLinks.map((link) => (
          <TouchableOpacity
            key={link.id}
            style={styles.quickLinkItem}
            onPress={() => navigation.navigate(link.route)}
          >
            <Text style={styles.quickLinkText}>{link.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  promotionItem: {
    marginRight: 16,
  },
  promotionImage: {
    width: 200,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  promotionTitle: {
    textAlign: "center",
  },
  newArrivalItem: {
    marginRight: 16,
  },
  newArrivalImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  newArrivalName: {
    textAlign: "center",
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  quickLinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickLinkItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  quickLinkText: {
    fontSize: 16,
  },
});

export default Home;

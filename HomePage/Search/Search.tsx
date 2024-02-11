import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text) => {
    setSearchQuery(text);

    // Your filtering logic goes here
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      {/* Your FlatList or other content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  searchInput: {
    height: 40,
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default Search;

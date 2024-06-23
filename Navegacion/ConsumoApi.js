import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function EjemploApi() {

    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);

    const getFruits = async () => {
        try {
            const response = await fetch('https://www.fruityvice.com/api/fruit/all');
            const json = await response.json();
            setData(json);
            setFilteredData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const searchFilter = (text) => {
        if (text) {
            const newData = data.filter((item) => {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        } else {
            setFilteredData(data);
            setSearch(text);
        }
    };

    const handleFavorite = (item) => {
        if (favorites.includes(item)) {
            setFavorites(favorites.filter(fav => fav !== item));
        } else {
            setFavorites([...favorites, item]);
        }
    };

    useEffect(() => {
        getFruits();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <TextInput
                style={styles.txtInput}
                value={search}
                placeholder="Buscar"
                onChangeText={(text) => searchFilter(text)}
            />
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={filteredData}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>
                                <Text style={styles.itemTitle}>Nombre:</Text> {item.name}
                            </Text>
                            <Text style={styles.itemText}>
                                <Text style={styles.itemTitle}>Familia:</Text> {item.family}
                            </Text>
                            <Text style={styles.itemText}>
                                <Text style={styles.itemTitle}>Calorias:</Text> {item.nutritions.calories}
                            </Text>
                            <Text style={styles.itemText}>
                                <Text style={styles.itemTitle}>Carbohydratos:</Text> {item.nutritions.carbohydrates}
                            </Text>
                            <Text style={styles.itemText}>
                                <Text style={styles.itemTitle}>Proteinas:</Text> {item.nutritions.protein}
                            </Text>
                            <Text style={styles.itemText}>
                                <Text style={styles.itemTitle}>Grasas:</Text> {item.nutritions.fat}
                            </Text>
                            <Text style={styles.itemText}>
                                <Text style={styles.itemTitle}>Azucar:</Text> {item.nutritions.sugar}
                            </Text>
                            <TouchableOpacity onPress={() => handleFavorite(item)}>
                                <Text style={styles.favoriteText}>
                                    {favorites.includes(item) ? '❤️ Quitar de favoritos' : '♡ Agregar a favoritos'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 290,
    },
    containerSvg: {
        alignItems: 'center',
    },
    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'left',
        paddingLeft: 30,
    },
    txtSubtitulo: {
        fontSize: 20,
        fontWeight: 'light',
        color: 'gray',
        textAlign: 'left',
        paddingLeft: 30,
        marginTop: 20,
    },
    txtInput: {
        width: '80%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        marginLeft: 30,
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
    },
    txtPass: {
        textAlign: 'right',
        paddingTop: 10,
        marginRight: 50,
        color: '#00C1BB',
        fontSize: 15,
    },
    btnLogin: {
        borderRadius: 10,
        width: 219,
        height: 53,
        marginTop: 35,
        marginLeft: 80,
        paddingTop: 10,
    },
    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    txtCuenta: {
        textAlign: 'center',
        paddingTop: 10,
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
    },
    txtRegistrarse: {
        textAlign: 'center',
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
    itemTitle: {
        fontWeight: 'bold',
    },
    favoriteText: {
        fontSize: 16,
        color: '#00C1BB',
        marginTop: 5,
    },
});

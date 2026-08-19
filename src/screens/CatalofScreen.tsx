import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useBooks } from '@/context/BookContext';
import { Book } from '@/types/book';

export const CatalofScreen = () => {
    const { books } = useBooks();
    const [selectedGenero, setSelectedGenero] = useState<string | null>(null);

    const generos = [...new Set(books.map((b) => b.genero))];
    const filtered = selectedGenero
        ? books.filter((b) => b.genero === selectedGenero)
        : books;

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Catálogo</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
                <TouchableOpacity
                    style={[styles.chip, !selectedGenero && styles.chipSelected]}
                    onPress={() => setSelectedGenero(null)}>
                    <Text style={[styles.chipText, !selectedGenero && styles.chipTextSelected]}>Todos</Text>
                </TouchableOpacity>
                {generos.map((g) => (
                    <TouchableOpacity
                        key={g}
                        style={[styles.chip, selectedGenero === g && styles.chipSelected]}
                        onPress={() => setSelectedGenero(g)}>
                        <Text style={[styles.chipText, selectedGenero === g && styles.chipTextSelected]}>{g}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <FlatList
                data={filtered}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }: { item: Book }) => (
                    <TouchableOpacity style={styles.card}>
                        {item.image ? (
                            <Image source={item.image} style={styles.bookImage} resizeMode="cover" />
                        ) : (
                            <View style={styles.iconContainer}>
                                <Ionicons name="book-outline" size={40} color="#5D4037" />
                            </View>
                        )}
                        <View style={styles.info}>
                            <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
                            <Text style={styles.cardAuthor} numberOfLines={1}>{item.author}</Text>
                            <Text style={styles.cardGenero}>{item.genero}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E1',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        color: '#5D4037',
    },
    filterRow: {
        paddingHorizontal: 8,
        marginBottom: 8,
        maxHeight: 44,
    },
    chip: {
        backgroundColor: '#EFEBE9',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginHorizontal: 4,
    },
    chipSelected: {
        backgroundColor: '#5D4037',
    },
    chipText: {
        color: '#5D4037',
        fontSize: 13,
        fontWeight: 'bold',
    },
    chipTextSelected: {
        color: '#FFF8E1',
    },
    listContainer: {
        padding: 8,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#EFEBE9',
        borderRadius: 8,
        margin: 8,
        padding: 12,
        alignItems: 'center',
    },
    bookImage: {
        width: 80,
        height: 110,
        borderRadius: 8,
    },
    iconContainer: {
        width: 80,
        height: 110,
        borderRadius: 8,
        backgroundColor: '#D7CCC8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5D4037',
    },
    cardAuthor: {
        fontSize: 13,
        color: '#8D6E63',
        marginTop: 4,
    },
    cardGenero: {
        fontSize: 12,
        color: '#A1887F',
        marginTop: 2,
        fontStyle: 'italic',
    },
});

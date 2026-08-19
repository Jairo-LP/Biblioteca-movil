import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import { useBooks } from "@/context/BookContext";

const GENERO_OPTIONS = [
    'Ficción',
    'No ficción',
    'Romance',
    'Suspenso',
    'Ciencia',
    'Historia',
    'Clásico',
    'Fantasía',
    'Realismo mágico',
    'Terror',
];

export const AddScreen = () => {
    const { addBook } = useBooks();
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const handleAdd = () => {
        if (!titulo.trim() || !autor.trim() || !genero) {
            Alert.alert('Error', 'Completa todos los campos');
            return;
        }
        addBook(titulo.trim(), autor.trim(), genero);
        Alert.alert('Éxito', `"${titulo}" fue agregado`);
        setTitulo('');
        setAutor('');
        setGenero('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.headerTitle}>Añadir Libro</Text>

            <View style={styles.form}>
                <Text style={styles.label}>Título</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ej: Don Quijote"
                    placeholderTextColor="#A1887F"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                <Text style={styles.label}>Autor</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ej: Miguel de Cervantes"
                    placeholderTextColor="#A1887F"
                    value={autor}
                    onChangeText={setAutor}
                />

                <Text style={styles.label}>Género</Text>
                <View style={styles.generoRow}>
                    {GENERO_OPTIONS.map((g) => (
                        <TouchableOpacity
                            key={g}
                            style={[
                                styles.generoOption,
                                genero === g && styles.generoOptionSelected,
                            ]}
                            onPress={() => setGenero(g)}>
                            <Text style={[
                                styles.generoOptionText,
                                genero === g && styles.generoOptionTextSelected,
                            ]}>
                                {g}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>Agregar Libro</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF8E1',
        padding: 24,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
        color: '#5D4037',
    },
    form: {
        marginTop: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#5D4037',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#EFEBE9',
        borderRadius: 8,
        padding: 14,
        fontSize: 16,
        color: '#5D4037',
        marginBottom: 20,
    },
    generoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 20,
    },
    generoOption: {
        backgroundColor: '#EFEBE9',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    generoOptionSelected: {
        backgroundColor: '#5D4037',
    },
    generoOptionText: {
        color: '#5D4037',
        fontSize: 14,
        fontWeight: 'bold',
    },
    generoOptionTextSelected: {
        color: '#FFF8E1',
    },
    button: {
        backgroundColor: '#5D4037',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#FFF8E1',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

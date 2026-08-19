import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [categoria, setCategoria] = useState('');

  return (
    <View>
      <Text>Agregar libro</Text>

      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        placeholder="Autor"
        value={autor}
        onChangeText={setAutor}
      />

      <TextInput
        placeholder="Categoría"
        value={categoria}
        onChangeText={setCategoria}
      />

      <Button
        title="Guardar libro"
        onPress={() => {
          console.log(titulo, autor, categoria);
        }}
      />
    </View>
  );
}

export default App;
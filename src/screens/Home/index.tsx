import React, { useState } from 'react';
import { View } from 'react-native';

import { Profile } from '../../components/Profile'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelect(id: string) {
    id === category ? setCategory('') : setCategory(id)
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
    </View>
  );
}
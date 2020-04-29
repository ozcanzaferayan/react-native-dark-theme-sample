import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ImageRequireSource,
} from 'react-native';

import {useDarkModeContext} from 'react-native-dark-mode';
import RadioGroup from './src/RadioGroup';

type Theme = {
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  background: string;
  planet: ImageRequireSource;
};

type Themes = {
  black: Theme;
  dark: Theme;
  light: Theme;
};

export type Item = {
  id: string;
  name: string;
};
export type RadioGroupProps = {
  items: Item[];
  selected?: Item;
  onSelected(item: Item): void;
};
export type RadioButtonProps = {
  item: Item;
  selected?: Item;
  onSelected(item: Item): void;
};

const App = () => {
  const items: Item[] = [
    {id: 'system', name: 'System'},
    {id: 'black', name: 'Black'},
    {id: 'dark', name: 'Dark'},
    {id: 'light', name: 'Light'},
  ];
  const [selected, setSelected] = useState<Item>(items[0]);
  const systemThemeString = useDarkModeContext();
  const themeString =
    selected.id === 'system' ? systemThemeString : selected.id;
  const barStyle = themeString === 'dark' ? 'dark-content' : 'light-content';
  const theme = themes[themeString];
  const styles = customStyles(theme);

  const onSelected = (item: Item) => {
    setSelected(item);
  };

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <Image source={theme.planet} style={styles.img} />
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Description</Text>
        </View>
        <View style={styles.bottomBar}>
          <RadioGroup
            selected={selected}
            onSelected={onSelected}
            items={items}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const themes: Themes = {
  black: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#d9d9d9',
    textSecondary: '#6e767d',
    background: '#000000',
    planet: require('./img/moon_black.png'),
  },
  dark: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#ffffff',
    textSecondary: '#8899a6',
    background: '#15202b',
    planet: require('./img/moon_dark.png'),
  },
  light: {
    primary: '#1da1f2',
    secondary: '#8ed0f9',
    text: '#14171a',
    textSecondary: '#657786',
    background: '#ffffff',
    planet: require('./img/sun.png'),
  },
};

const customStyles = (t: Theme) =>
  StyleSheet.create({
    safeAreaView: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: t.background,
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      color: t.text,
      fontSize: 22,
      marginTop: 12,
    },
    description: {
      color: t.textSecondary,
      marginTop: 0,
      marginBottom: 12,
    },
    img: {
      width: 100,
      height: 100,
    },
    bottomBar: {
      alignItems: 'center',
    },
  });

export default App;

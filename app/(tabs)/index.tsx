import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import { Button } from "react-native-paper";
import HandShow from "../../assets/images/handShow.svg";
import colors from "../../constants/portcolors";
import {t} from "../../src/messages";
import { router } from "expo-router";




    
export default function Index() {

  const styles = StyleSheet.create({
    wrapper: {alignItems: 'center', backgroundColor: 'white', flex: 1},
    welcomeMessage: {
      color: colors.primary,
      fontSize: 24,
      textAlign: 'center',
      marginTop: 72,
    },
    title: {
      fontWeight: 'bold',
      color: colors.primary,
      fontSize: 45,
      textAlign: 'center',
    },
    subtitle: {
      color: colors.primary,
      fontSize: 32,
      textAlign: 'center',
      marginTop: 2,
    },
    pushDown: {marginTop: 'auto'},
    buttonStyle: {width: '100%', borderRadius: 0},
    subText: {
      color: '#74808B',
      fontWeight: '400',
      fontSize: 14,
      textAlign: 'center',
    },
  });

  const label = 'selectLanguage';

  // Assuming `localState` and `flow` are defined somewhere in your component
interface LocalState {
  languageSelected: string;
  // Add other properties if needed
}

  const localState: LocalState = {
    languageSelected: 'en', // Example value
    // Initialize other properties if needed
  };
  
  const flow: string = 'true';

  return (
    
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.wrapper} style={{flex: 1}}>
        <View style={{zIndex: 2}}>
          <Text style={styles.welcomeMessage}>{t('welcome')}</Text>
          <Text style={styles.title}>{t('title')}</Text>
          <Text style={styles.subtitle}>{t('subTitle')}</Text>
          <Text style={styles.subText}>2.3</Text>
          { /*}
          <Text style={styles.subText}>{appVersion}</Text> TBD */}
        </View>
        <HandShow
          style={styles.pushDown}
          opacity={0.8}
        />
        { /* TBD
        <HandShow
          style={styles.pushDown}
          height={dimensionOfImage}
          width={dimensionOfImage}
          opacity={opacity}
          zIndex={1}
        /> */ }
      </ScrollView>
      { /* TBD
      <Menu
        onMenuStateChange={value => setImageOpacity(value ? 0.1 : 1)}
        onMenuSelected={menu => {
          if (menu === Menus.language) {
            navigation.navigate('Language', {localState, flow: false});
          } else if (menu === Menus.about) {
            navigation.navigate('About', {localState, flow: false});
          }
        }}
      /> */ }
      <Button
        icon="arrow-right"
        style={styles.buttonStyle}
        contentStyle={{width: '100%', height: 70, flexDirection: 'row-reverse'}}
        labelStyle={{fontSize: 20}}
        mode={'contained'}
        onPress={() => {

          router.push({
            pathname: "LanguageSelectionScreen",
            params: {flow: flow}
            // params: {localState: JSON.stringify(localState), flow: flow.toString()}
            });

          // navigation.navigate('Language', {localState, flow: true});
          
        }}>
        {t(label)}
      </Button>      
      { /*}
      <Button
        icon="arrow-right"
        style={styles.buttonStyle}
        contentStyle={{width: '100%', height: 70, flexDirection: 'row-reverse'}}
        labelStyle={{fontSize: 20}}
        mode={'contained'}
        onPress={() => {
          if (disclaimerAccepted) {
            navigation.navigate('Questionnaire');
          } else if (languageSelected) {
            navigation.navigate('Disclaimer');
          } else {
            navigation.navigate('Language', {localState, flow: true});
          }
        }}>
        {t(label)}
      </Button>
      */ }
    </View>
  );



  /*
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
  */
}

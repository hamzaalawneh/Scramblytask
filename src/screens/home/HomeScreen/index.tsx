import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useAuthStore} from '@store/useAuthStore';
import CustomButton from '@components/CustomButton';
import {styles} from './styles';
import {HomeScreenProps} from './types';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {user, logout} = useAuthStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to Scrambly Task!</Text>
        <Text style={styles.userEmail}>Logged in as: {user?.email}</Text>

        <CustomButton title="Show List" onPress={() => navigation.navigate('List')} style={styles.listButton} />

        <CustomButton title="Logout" onPress={logout} style={styles.logoutButton} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

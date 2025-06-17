import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '@navigation/HomeStackNavigator';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

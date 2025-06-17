import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {HomeStackParamList} from '@navigation/HomeStackNavigator';

type ListItemDetailsNavigationProp = StackNavigationProp<HomeStackParamList, 'ListItemDetails'>;
type ListItemDetailsRouteProp = RouteProp<HomeStackParamList, 'ListItemDetails'>;

export interface ListItemDetailsProps {
  navigation: ListItemDetailsNavigationProp;
  route: ListItemDetailsRouteProp;
}

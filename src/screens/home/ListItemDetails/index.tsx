import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {ListItemDetailsProps} from './types';

const ListItemDetails: React.FC<ListItemDetailsProps> = ({route}) => {
  const {post} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.bodyLabel}>Content:</Text>
        <Text style={styles.body}>{post.body}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ListItemDetails;

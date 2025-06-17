import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {styles} from './styles';
import {ListScreenProps, Post} from './types';
import {usePostsStore} from '@store/postsStore';
import {fetchPosts} from '@services/Api';

const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const {posts, setPosts} = usePostsStore();

  const fetchFromAPI = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.log('Request timed out after 4 seconds');
    } finally {
      setLoading(false);
    }
  }, [setPosts]);

  const loadPosts = useCallback(async () => {
    const netInfo = await NetInfo.fetch();

    if (netInfo.isConnected) {
      await fetchFromAPI();
    } else {
      setLoading(false);
    }
  }, [fetchFromAPI]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handlePostPress = (post: Post) => {
    navigation.navigate('ListItemDetails', {post});
  };

  const renderPostItem = ({item}: {item: Post}) => (
    <TouchableOpacity style={styles.postItem} onPress={() => handlePostPress(item)}>
      <Text style={styles.postTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading posts...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (posts.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>No posts available</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPostItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default ListScreen;

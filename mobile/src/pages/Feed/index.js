import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native'

import api from '../../services/api';

import Header from '../../components/Header';

import styles from './styles';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function loadPosts() {
    if (loading) {
      return;
    }

    if (total > 0 && posts.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('posts');

    setPosts([...posts, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);


  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        style={styles.incidentList}
        keyExtractor={item => String(item._id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadPosts}
        onEndReachedThreshold={0.2}
        renderItem={({ item: item }) => (
          <View style={styles.post}>
            <Text style={styles.incidentValue}>{item.author}</Text>
          </View>
        )}
      />
    </View>


  );
}

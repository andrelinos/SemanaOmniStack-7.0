import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Header from '../../components/Header';

import more from '../../assets/more.png';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
import send from '../../assets/send.png';
import bookmarker from '../../assets/bookmarker.png';

import styles from './styles';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleLike(id) {
    console.log('TEste');
  }

  async function loadPosts() {
    if (loading) {
      return;
    }

    if (total > 0 && posts.length >= total) {
      return;
    }

    setLoading(true);

    const response = await api.get('posts', {
      params: { page },
    });

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
        style={styles.container}
        keyExtractor={(post) => String(post._id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadPosts}
        onEndReachedThreshold={0.2}
        renderItem={({ item: post }) => (
          <View style={styles.feedItem}>
            <View style={styles.feedItemHeader}>
              <View style={styles.userInfGrop}>
                <TouchableOpacity>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: `http://192.168.0.103:3333/files/${post.image}`,
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                  <TouchableOpacity>
                    <Text style={styles.author}>{post.author}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.place}>{post.place}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity>
                <View style={styles.moreArea}>
                  <Image style={styles.more} source={more} />
                </View>
              </TouchableOpacity>
            </View>
            <Image
              style={styles.feedImage}
              source={{ uri: `http://192.168.0.103:3333/files/${post.image}` }}
            />
            <View style={styles.feddItemFooter}>
              <View style={styles.actions}>
                <View style={styles.actionGroup}>
                  <TouchableOpacity
                    style={styles.action}
                    onPress={() => handleLike}
                  >
                    <Image source={like} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={comment} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={send} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.actionBookmarker}
                  onPress={() => {}}
                >
                  <Image source={send} />
                </TouchableOpacity>
              </View>
              <Text style={styles.likes}>{post.likes} curtidas</Text>
              <Text style={styles.description}>{post.description}</Text>
              <Text style={styles.hashtags}>{post.hashtags}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

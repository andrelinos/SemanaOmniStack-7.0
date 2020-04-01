import React from 'react';
import { View, Image, Input, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import camera from '../../assets/camera.png';
import send from '../../assets/send.png';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
      <TouchableOpacity>
        <Image style={styles.camera} source={camera} />
      </TouchableOpacity>
      <Image style={styles.logo} source={logo} />
      </View>
      <TouchableOpacity>
        <Image style={styles.send} source={send} />
      </TouchableOpacity>
    </View>
  );
}

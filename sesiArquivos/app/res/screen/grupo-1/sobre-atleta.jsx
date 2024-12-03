// Gabriel / Test
import React, { useState } from 'react';
import { Box, Heading, Image, SafeAreaView, ScrollView, Text } from '@gluestack-ui/themed';
import { User, BadgeCheck, MapPin, Star } from 'lucide-react-native';
import { View, FlatList } from 'react-native';
import Luka from '../../../src/img/Luka.png';
import styles from './styles/style'

export default function SobreatletaScreen({ route }) {
  const { athlete } = route.params;

    return (
      <SafeAreaView>
        <ScrollView>
          <Box style={styles.container} >
            <View style={styles.imgcontainer}>
              <Image source={athlete.image} style={styles.imgLuka} />
            </View>
            <View style={styles.Cardtext}>
              <Heading style={styles.title}>{athlete.name}</Heading>
              <View style={styles.viewestrela}>
                <Text style={styles.textestrela}>Estrela </Text>
                <Star style={styles.estrela} size={15} color={"yellow"} />
              </View>
              <Text style={styles.textWhite}><BadgeCheck size={15} color={"blue"} /> Verificado  </Text>
              <Text style={styles.textWhite}><User size={15} color={"white"} /> {athlete.gender}</Text>
              <Text style={styles.textWhite}><MapPin size={15} color={"white"} /> {athlete.area}</Text>
            </View>
            <View style={styles.Cardtext}>
              <Heading style={styles.title2}>Sobre Mim</Heading>
              <Text style={styles.textWhite}>{athlete.about}</Text>
              <Heading style={styles.title2}>Como se tornar um(a) atleta</Heading>
              <Text style={styles.textWhite}>{athlete.howtobe}</Text>
            </View>

          </Box>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // const AtletaData = [
  //   { id: 1, image: require("../../../src/img/Luka.png"), name: "Luka Doncic", gender: "Homem", area: "Atua pelo Dallas Mavericks, NBA", about: "Luka Dončić é um basquetebolista esloveno que atua como ala-armador. Atualmente joga no Dallas Mavericks, na National Basketball Association. Foi escolhido pelo Atlanta Hawks na 3ª escolha no Draft da NBA de 2018, em seguida trocado para os Dallas Mavericks por Trae Young. ", howtobe: "a" }
  // ]
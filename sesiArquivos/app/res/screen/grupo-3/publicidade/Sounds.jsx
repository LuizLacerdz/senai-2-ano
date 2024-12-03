import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

import Sound from 'react-native-sound';

import sound from '../../../../src/img/som/audio.mp3';

Sound.setCategory('Playback');

const ReprodutorAudio = () => {
    const [audio, setAudio] = useState(null);
    const [estaTocando, setEstaTocando] = useState(false);
    const [volume, setVolume] = useState(0.5); // Volume inicial 50%
    const [duracao, setDuracao] = useState(0);
    const [tempoAtual, setTempoAtual] = useState(0);

    useEffect(() => {
        const som = new Sound(sound, Sound.MAIN_BUNDLE, (erro) => {
            if (erro) {
                console.log('Falha ao carregar o som', erro);
                return;
            }
            setDuracao(som.getDuration());
        });
        setAudio(som);

        return () => {
            som.release();
        };
    }, []);

    const tocarAudio = () => {
        if (audio) {
            audio.setVolume(volume);
            audio.play((sucesso) => {
                if (sucesso) {
                    console.log('Reprodução finalizada');
                    setEstaTocando(false);
                } else {
                    console.log('Falha na reprodução');
                }
            });
            setEstaTocando(true);
    
        }
    };

    const pararAudio = () => {
        if (audio) {
            audio.stop(() => {
                setTempoAtual(0);
                setEstaTocando(false);
            });
        }
    };

    const pausarAudio = () => {
        if (audio) {
            audio.pause();
            setEstaTocando(false);
        }
    };



   
    return (
        <View style={styles.container}>
         
            <View style={styles.controls}>
                <Button
                    title={estaTocando ? 'Pausar' : 'Tocar'}
                    onPress={estaTocando ? pausarAudio : tocarAudio}
                />
                <Button title="Parar" onPress={pararAudio} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        minHeight: 50,
        borderRadius:20,
    },
  
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 10,
    },
    
});

export default ReprodutorAudio;

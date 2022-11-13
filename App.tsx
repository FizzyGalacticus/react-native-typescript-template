/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { type PropsWithChildren } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ScreenContainer from './src/common/ScreenContainer';
import Text from './src/common/Text';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

const Stack = createNativeStackNavigator();

const Section: React.FC<
    PropsWithChildren<{
        title: string;
    }>
> = ({ children, title }) => (
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionDescription}>{children}</Text>
    </View>
);

const Home = ({ navigation }: { navigation: any }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <ScreenContainer>
            <Header />
            <View
                style={{
                    backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}
            >
                <Section title="Other Section">
                    <Text style={styles.highlight} onPress={() => navigation.navigate('Other')}>
                        Go to Other Section
                    </Text>
                </Section>
                <Section title="Step One">
                    Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see
                    your edits.
                </Section>
                <Section title="See Your Changes">
                    <ReloadInstructions />
                </Section>
                <Section title="Debug">
                    <DebugInstructions />
                </Section>
                <Section title="Learn More">Read the docs to discover what to do next:</Section>
                <LearnMoreLinks />
            </View>
        </ScreenContainer>
    );
};

const Other = ({ navigation }: { navigation: any }) => (
    <ScreenContainer>
        <Section title="Debug">
            <Text>Test</Text>
        </Section>
        <Text style={styles.highlight} onPress={() => navigation.popToTop()}>
            Go Back
        </Text>
    </ScreenContainer>
);

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Other" component={Other} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;

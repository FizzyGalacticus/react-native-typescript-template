import React, { ReactNode } from 'react';
import { Text as NativeText, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Text = ({
    children,
    style,
    ...props
}: {
    children: ReactNode;
    style?: Record<string, unknown>;
    [x: string]: any;
}) => {
    const color = useColorScheme() === 'dark' ? Colors.white : Colors.black;

    return (
        <NativeText {...props} style={[style ?? {}, { color }]}>
            {children}
        </NativeText>
    );
};

export default Text;

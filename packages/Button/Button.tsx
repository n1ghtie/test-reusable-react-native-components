import React from 'react';
import { Button as RNButton, ButtonProps, View } from 'react-native-web';

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
    return (
        <View>
            <RNButton {...props} />
        </View>
    );
};

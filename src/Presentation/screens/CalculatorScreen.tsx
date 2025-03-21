import React from 'react';
import { View, Text } from 'react-native';
import { colors, styles } from '../../config/theme/app-theme';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';

const CalculatorScreen = () => {
    const { number, buildNumber } = useCalculator();

    const clearAll = () => {
        buildNumber("0");
    };

    const deleteLastNumber = () => {
        buildNumber("Del");
    };

    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
                    {number}
                </Text>
                <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
                    {number}
                </Text>
            </View>

            <View style={styles.row}>
               
                <CalculatorButton onPress={clearAll} blackText label="C" color={colors.lighGray} />
                <CalculatorButton onPress={() => console.log("+/-")} blackText label="+/-" color={colors.lighGray} />
                <CalculatorButton onPress={deleteLastNumber} blackText label="Del" color={colors.lighGray} />
                <CalculatorButton onPress={() => buildNumber("/")} label="/" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber("7")} label="7" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("8")} label="8" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("9")} label="9" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("x")} label="x" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber("4")} label="4" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("5")} label="5" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("6")} label="6" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("-")} label="-" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber("1")} label="1" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("2")} label="2" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("3")} label="3" color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("+")} label="+" color={colors.orange} />
            </View>

            <View style={styles.row}>
                <CalculatorButton onPress={() => buildNumber("0")} label="0" doubleSize color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber(".")} label="." color={colors.darkGray} />
                <CalculatorButton onPress={() => buildNumber("=")} label="=" color={colors.orange} />
            </View>
        </View>
    );
};

export default CalculatorScreen;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native";

  const Grafico = () => {
      
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

      const data = {
        labels: ["salario", "basico", "ocio", "adicional"], // optional
        data: [0.4, 0.6, 1, 0.2]
      };



    return ( 
        <View style= {styles.container}>
            
        <Text>Aprender a usar alguna api de graficos</Text>

        <ProgressChart
  data={data}
  width={screenWidth}
  height={220}
  strokeWidth={10}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>
    </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
 
export default Grafico;
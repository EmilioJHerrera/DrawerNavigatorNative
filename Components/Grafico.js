import React, {useEffect, useState} from 'react';
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
  import { useDispatch, useSelector } from 'react-redux';


  
  
  

  
  

  const Grafico = () => {
  
      const data = useSelector(state => state.items.list);
    const [totales, setTotales] = useState(0);
    const [ingresos, setIngresos] = useState(0);
    const [egresos, setEgresos] = useState(0);

    useEffect(() => {
      let total = 0;
           data.forEach(item => {
               total += item.amount;
           });
        setTotales(total);
        console.log(totales);

           let totalIngresos = 0;
           let totalEgresos = 0;
           data.forEach(item => {
               if(item.type === "income"){
                   totalIngresos += item.amount;
               }
               if(item.type === "outcome"){
                totalEgresos += item.amount;
            }
           });
        setIngresos(totalIngresos);
        setEgresos(totalEgresos);

    }, [data]);


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

      const dataGraph = {
        labels: ["total","ingresos", "egresos"], // optional
        data: [totales,ingresos, egresos]
      };



    return ( 
        <View style= {styles.container}>
            
        <Text>Mostrar graficos</Text>

        <ProgressChart
  data={dataGraph}
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
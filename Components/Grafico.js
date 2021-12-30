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
import { Colors } from '../assets/Colors';


  
  
  

  
  

  const Grafico = () => {
  
      const data = useSelector(state => state.items.list);
    const [totales, setTotales] = useState(0);
    const [ingresos, setIngresos] = useState(0);
    const [egresos, setEgresos] = useState(0);

    //valores porcentuales
    const [porcentajeIngresos, setPorcentajeIngresos] = useState(0);
    const [porcentajeEgresos, setPorcentajeEgresos] = useState(0);
    
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

        setPorcentajeIngresos((totalIngresos/ total));
        setPorcentajeEgresos((totalEgresos/ total));

    }, [data]);


    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: Colors.background,
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: Colors.background,
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(95, 95, 230, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

      const dataGraph = {
        labels: ["total","ingresos", "egresos"], // optional
        data: [1,porcentajeIngresos, porcentajeEgresos]
      };

      
    return ( 
        <View style= {styles.container}>
            
        <Text style={styles.label}>Mostrar gráficos</Text>
      <View>
      
        <ProgressChart
  data={dataGraph}
  width={screenWidth}
  height={320}
  strokeWidth={20}
  radius={32}
  chartConfig={chartConfig}
  hideLegend={false}
/>

      </View>

      <View>
        <Text style={styles.label}>Total: {totales}$</Text>
        <Text style={styles.label}>Ingresos: {ingresos}$</Text>
        <Text style={styles.label}>Egresos: {egresos}$</Text>
        </View>
    </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
      },
      label: {
        fontSize: 20,
        color: Colors.my_white,
         fontWeight: 'bold',
          marginVertical: '2%',
         },
});
 
export default Grafico;
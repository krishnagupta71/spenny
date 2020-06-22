import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
const screenWidth = Dimensions.get("window").width;
import { LineChart } from "react-native-chart-kit"
import { moderateScale } from '../utilities/fontScaling';

class SpennyGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <LineChart
                data={data}
                width={screenWidth}
                height={moderateScale(300)}
                verticalLabelRotation={0}
                chartConfig={chartConfig}
                segments={3}
                withDots={false}
                withInnerLines={false}
                withOuterLines={false}
                withHorizontalLabels={true}
                fromZero={true}
                yAxisInterval={3}
                bezier
            />
        );
    }
}
const chartConfig = {
    backgroundGradientFrom: '#f8f9f9',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#f8f9f9',
    useShadowColorFromDataset: true,
    color: (opacity = 1) => `#77869e`,//color of axis
    strokeWidth: 2, 
    propsForBackgroundLines: {
        strokeWidth: 0
    }
};
const data = {
    labels: ["0", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
        {
            data: [80, 70, 75, 67, 90, 78, 80, 69, 79, 85, 75],
            color: (opacity = 1) => `#4df1a1`, // optional //color of line
            strokeWidth: 2 // optional
        },
        {
            data: [35, 33, 32, 25, 35, 40, 30, 20, 38, 35, 25],
            color: (opacity = 1) => `#f24750`, // optional //color of line
            strokeWidth: 2 // optional
        }
    ],
};
export default SpennyGraph;

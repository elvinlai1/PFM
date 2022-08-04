import React from "react";
import { StyleSheet, View } from "react-native";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
  
  },
  {
    name: 'Page B',
    uv: 3000,
  
  },
  {
    name: 'Page C',
    uv: 2000,

  },
  {
    name: 'Page D',
    uv: 2780,
    
  },
];


const Summary = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ResponsiveContainer width="80%" height="80%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
      </View>
   
    );
  }

export default Summary;

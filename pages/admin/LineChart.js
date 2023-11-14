import { useEffect, useState } from 'react';
// import styles from '../../styles/Admin.module.scss';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

// import { db } from '../../firebase/firebase';
// import { getDocs, collection } from 'firebase/firestore';

function LineChart({ chartData }) {
  const options = {
    plugins: {
      legend: true,
    },
  };
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;

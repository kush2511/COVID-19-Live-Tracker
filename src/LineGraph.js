import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import numeral from 'numeral';
import './LineGraph.css';

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function(tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: 'time',
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function(value, index, values){
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};

const buildChartData = (data, casesType) => {
    let lastDataPoint;
    let chartData = [];
    //console.log(data.cases);
    for(let date in data.cases) {

        if(lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            }
            
            // console.log("logging", data[country][casesType])
            //console.log("log", data[casesType][date])
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

function LineGraph({casesType = 'cases',  country = "all", ...props}) {

    //console.log("Country", country);
    const [data, setData] = useState({
        cases: [],
        recovered: [],
        deaths: [],
    });
    //https://disease.sh/v3/covid-19/historical/all?lastdays=30

    useEffect(() => {
        const fetchData = async () => {
            if(country !== 'Worldwide'){
                await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=120`)
                .then((response) => {
                    //console.log(response.json());
                    return response.json()
                })
                .then((data) => {
                    //console.log("Data", data.timeline)
                    let chartData = buildChartData(data.timeline, casesType);
                    setData(chartData);
                });
            } else{
                await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=120`)
                .then((response) => {
                    //console.log(response.json());
                    return response.json()
                })
                .then((data) => {
                    //console.log("Data", data.timeline)
                    let chartData = buildChartData(data, casesType);
                    setData(chartData);
                });
            }  
        }

        fetchData();
    }, [casesType, country]);

    //console.log(casesType);

    return (
        
        <div className={props.className}>
            {data?.length > 0 && casesType === "cases" && (
                <Line data={{
                    
                    datasets: 
                    [{
                        backgroundColor : 'rgba(1, 124, 255, 0.5)',
                        borderColor: "#017CFF",
                        data: data,
                    }]
                }}
                options = {options}
                />
            )} : {data?.length > 0 && casesType === "deaths" && (
                <Line data={{
                    datasets: 
                    [{
                        backgroundColor : 'rgba(204, 16, 52, 0.5)',
                        borderColor: "#CC1034",
                        data: data,
                    }]
                }}
                options = {options}
                />
            )} : {data?.length > 0 && casesType === "recovered" && (
                <Line data={{
                    datasets: 
                    [{
                        backgroundColor : 'rgba(0, 128, 0, 0.5)',
                        borderColor: "#008000",
                        data: data,
                    }]
                }}
                options = {options}
                />
            )}
            
        </div>
    )
}

export default LineGraph


var chartDef = {
    chart: {
        type: 'bar',
    },
    series: [{
        name: 'Inflation',
        data: [
            { x: 0, y: 2.3 }, 
            { x: 1, y: 3.1, },
            { x: 2, y: 4.0,  },
            { x: 3, y: 10.1,  },
            { x: 4, y: 4.0,  },
            { x: 5, y: 3.6,  },
            { x: 6, y: 3.2,  },
            { x: 7, y: 2.3,  },
            { x: 8, y: 1.4,  },
            { x: 9, y: 0.8,  },
            { x: 10, y: 0.5,  },
            { x: 11, y: 0.2 },
        ]
    }],
};

var chart = new ApexCharts(document.querySelector("#chart"), chartDef);

chart.render();



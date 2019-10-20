var yearGlobalValue = 2019;

var data = [{
        year: "1993",
        data: [{
            ice: 1,
            sea: 1993,
            temperature: 19,
            imgUrl: "./assets/img/1993.png"
        }]
    },
    {
        year: "2019",
        data: [{
            ice: 2,
            sea: 2019,
            temperature: 19,
            imgUrl: "./assets/img/2019.png"
        }]
    },
    {
        year: "2119",
        data: [{
            ice: 3,
            sea: 2119,
            temperature: 19,
            imgUrl: "./assets/img/2119.png"
        }]
    },
    {
        year: "2219",
        data: [{
            ice: 4,
            sea: 2219,
            temperature: 19,
            imgUrl: "./assets/img/2219.png"
        }]
    },
    {
        year: "2319",
        data: [{
            ice: 5,
            sea: 2319,
            temperature: 19,
            imgUrl: "./assets/img/2319.png"
        }]
    },
    {
        year: "2419",
        data: [{
            ice: 6,
            sea: 2419,
            temperature: 19,
            imgUrl: "./assets/img/2419.png"
        }]
    },
    {
        year: "2519",
        data: [{
            ice: 7,
            sea: 2519,
            temperature: 19,
            imgUrl: "./assets/img/2519.png"
        }]
    },
    {
        year: "2619",
        data: [{
            ice: 8,
            sea: 2619,
            temperature: 19,
            imgUrl: "./assets/img/2619.png"
        }]
    },
    {
        year: "2719",
        data: [{
            ice: 9,
            sea: 2719,
            temperature: 19,
            imgUrl: "./assets/img/2719.png"
        }]
    },
    {
        year: "2819",
        data: [{
            ice: 10,
            sea: 2819,
            temperature: 19,
            imgUrl: "./assets/img/2819.png"
        }]
    },
    {
        year: "2919",
        data: [{
            ice: 11,
            sea: 2919,
            temperature: 19,
            imgUrl: "./assets/img/2919.png"
        }]
    },
    {
        year: "3019",
        data: [{
            ice: 12,
            sea: 3019,
            temperature: 19,
            imgUrl: "./assets/img/3019.png"
        }]
    }
];

(e => {
    let res = dataArray(this.data, e);
    changeImg(res.imgUrl);
})("2019");

function searchData(e) {
    e.preventDefault();
    let years = document.getElementById("years");
    let yearsValue = years.options[years.selectedIndex].value;
    yearGlobalValue = yearsValue;
    let response = this.dataArray(this.data, this.yearGlobalValue);
    this.changeImg(response.imgUrl);
}

function dataArray(obj, year) {
    for (const i of obj) {
        if (i.year == year) {
            return i.data[0];
        }
    }
}

function changeImg(url) {
    let map = document.getElementById("map");
    map.style.backgroundImage = "url('".concat(url).concat("')");
}
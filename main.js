const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var tableRows = [];
    var el = document.getElementById("data");

    getData(type, function(data) {
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            var dataRow = [];

            Object.keys(item).forEach(function(key) {
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15)
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<td>${dataRow}</td>`)
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}

/* CALLBACK */

/*

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);
 
  /*
getData(function(data) {
    console.log(data)
});
*/


/*

TIMEOUT EXAMPLE 

var xhr = new XMLHttpRequest();
var data; 

xhr.open("GET", "https://swapi.co/api/");
xhr.send(); */

/*function setData (jsonData) {
    data = jsonData;
   // console.log(data);
} */

/*
xhr.onreadystatechange = function() {
   //  console.log(this.readyState); // every time func is called
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText); 
    }
};

  
  setTimeout(function(){
      console.log(data);
  }, 500);
        
     // console.log(data);

      /*  console.log(JSON.parse(this.responseText));
       
        console.log(typeof(this.responseText));
        document.getElementById("data").innerHTML = this.responseText; */


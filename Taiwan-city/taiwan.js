fetch(
  "https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonFil) {
    let totalMsg = "";
    let msg = document.getElementById("msg");

    jsonFil.forEach((datas) => {
      let total = "";
      total += "<h1>" + datas.CityName + " " + datas.CityEngName + "</h1>";

      datas.AreaList.forEach((data) => {
        total += "<h3>" + data.ZipCode + " - " + data.AreaName + "</h3>";

        data.RoadList.forEach((str) => {
          total += "<h5>" + str.RoadName + " - " + str.RoadEngName + "</h5>";
        });
      });
      totalMsg += total;
    });

    msg.innerHTML = totalMsg;
  });

let array = [10, 20, 30, 40, 50];
let obj = {
  name: "gg",
  height: 123,
  sex: true,
};

for (let item in obj) {
  console.log(obj[item]);
}

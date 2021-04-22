let cityUrl =
  "https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/AllData.json";
fetch(cityUrl)
  .then((response) => {
    return response.json();
  })
  .then((dataTotal) => {
    //Array陣列元素是Object - 簡單的Array結構-
    let allCities = [
      { id: "taipei", name: "台北" },
      { id: "taoyuan", name: "桃園" },
      { id: "taichung", name: "台中" },
    ];

    //Array陣列元素是Object - 稍複雜的Array結構
    let cityArray = [
      {
        name: "taipei",
        ch_name: "台北",
        districts: [
          { id: "taipei01", district: "中正區" },
          { id: "taipei02", district: "萬華區" },
          { id: "taipei03", district: "信義區" },
        ],
      },
      {
        name: "taoyuan",
        ch_name: "桃園",
        districts: [
          { id: "taoyuan01", district: "桃園市" },
          { id: "taoyuan02", district: "八德市" },
          { id: "taoyuan03", district: "中壢市" },
        ],
      },
      {
        name: "taichung",
        ch_name: "台中",
        districts: [
          { id: "taichung01", district: "台中市" },
          { id: "taichung02", district: "大里市" },
          { id: "taichung03", district: "清水市" },
        ],
      },
    ];
    
    let cityObject = {
      taipei: [
        { id: "taipei01", district: "中正區" },
        { id: "taipei02", district: "萬華區" },
        { id: "taipei03", district: "信義區" },
      ],
      taoyuan: [
        { id: "taoyuan01", district: "桃園市" },
        { id: "taoyuan02", district: "八德市" },
        { id: "taoyuan03", district: "中壢市" },
      ],
      taichung: [
        { id: "taichung01", district: "台中市" },
        { id: "taichung02", district: "大里市" },
        { id: "taichung03", district: "清水市" },
      ],
    };

    let cities = Object.keys(cityObject);

    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");
    const submitButton = document.querySelector("input[type=submit]");
    const msg = document.getElementById("msg");

    window.onload = createSelectOptions;

    function createSelectOptions() {
      //Option1建立選項方式
      allCities.forEach((city, index) => {
        let option1 = document.createElement("option");
        option1.value = allCities[index].id;
        option1.text = allCities[index].name;
        citySelect.add(option1, null);
      });

      //Option2建立選項方式
      //這裡刻意稍後建請選擇的選項
      let option2 = document.createElement("option");
      option2.value = "";
      option2.text = "---請選擇縣市---";
      //option2.selected=true;
      option2.setAttribute("selected", ""); //預設選項
      citySelect.add(option2, 0);
    }

    let option3 = document.createElement("option");
    option3.value = "";
    option3.text = "---請選擇行政區---";
    districtSelect.add(option3, null);

    districtSelect.disabled = true;

    //City選項變更事件
    citySelect.onchange = citySelectedChange;

    function citySelectedChange(event) {
      //console.log(citySelect.selectedOptions[0]);

      let cityValue = citySelect.selectedOptions[0].value;
      let cityText = citySelect.selectedOptions[0].text;

      //清除並重新建立District <select>
      districtSelect.disabled = false;
      districtSelect.innerHTML = "";
      let option0 = document.createElement("option");
      option0.value = "";
      option0.text = "---請選擇行政區---";
      districtSelect.add(option0, null);

      //如果未選擇City則return
      if (cityValue == "") {
        districtSelect.disabled = true;
        msg.innerHTML = "";
        return;
      }

      console.log(cityValue + ", " + cityText);

      //從Object[CityName]取得值，其值為陣列
      let districtArray = cityObject[cityValue];
      districtArray.forEach((item) => {
        let opt = document.createElement("option");
        opt.value = item.id;
        opt.text = item.district;
        districtSelect.add(opt);
      });

      //以上如同以下一一動態建立option節點
      let opt1 = document.createElement("option");
      opt1.value = "taipei01";
      opt1.text = "taipei01";
      let opt2 = document.createElement("option");
      opt2.value = "taipei02";
      opt2.text = "taipei02";
      let opt3 = document.createElement("option");
      opt3.value = "taipei03";
      opt3.text = "taipei03";

      /*          districtSelect.add(opt1, null);
                  districtSelect.add(opt2, null);
                  districtSelect.add(opt3, null); */
    }

    districtSelect.addEventListener("change", function () {
      let cityValue = citySelect.selectedOptions[0].value;
      let cityText = citySelect.selectedOptions[0].text;
      let districtValue = districtSelect.selectedOptions[0].value;
      let districtText = districtSelect.selectedOptions[0].text;

      if (cityValue != "" && districtValue != "") {
        msg.innerText =
          citySelect.selectedOptions[0].text +
          "," +
          districtSelect.selectedOptions[0].text;
        console.log(cityText + ", " + districtText);
        submitButton.disabled = false;
      } else {
        msg.innerHTML = "";
        submitButton.disabled = true;
      }
    });

    submitButton.addEventListener("click", submitData);

    //Submit提交資料
    function submitData() {
      alert("你提交了資料");

      //建立FormData
      let formData = new FormData();
      formData.append("city", citySelect.selectedOptions[0].value);
      formData.append("district", districtSelect.selectedOptions[0].text);

      //傳送FormData資料到指定的Server，將資料交由Server處理
      let request = new XMLHttpRequest();
      request.open("POST", "https://www.codemagic.com.tw");
      request.send(formData);
    }
  });

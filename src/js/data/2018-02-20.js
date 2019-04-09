dataSetVersion = "2019-04-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "IDOLS", tooltip: "01 - KPOP", key: "IDOL" }
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Naeun",
    img: "kS8vNGT.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Lia",
    img: "vKsisrM.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Ilhoon",
    img: "32YxFCQ.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Mina",
    img: "G2tM2O6.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Rose",
    img: "ardBam3.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "MJ",
    img: "xynIbSO.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Onew",
    img: "WtlErcd.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jinyoung",
    img: "bem94c2.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jenny",
    img: "8MlCFr4.png",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Jeup",
    img: "Kd5kfsl.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hyuk",
    img: "3mncuMh.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hoshi",
    img: "VLCU7n4.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yeri",
    img: "u8I01ku.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Haebin",
    img: "cAvZ3ER.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yuqi",
    img: "cQzdJVX.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Yoona",
    img: "TfBjnIo.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Wooseok",
    img: "A9W1oJv.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Taeha",
    img: "e5GeTSg.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Tao",
    img: "Ua1jS87.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Taeyong",
    img: "j9djZmN.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Taeyang",
    img: "6HsRIgT.png",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Somin",
    img: "kwXt9MX.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Go Won",
    img: "6cuxIKf.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Gayoon",
    img: "0KJqPnr.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Elkie",
    img: "Bv5YXS6.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Bang Chan",
    img: "AWZ33Rh.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Exy",
    img: "h7lxDC7.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Chanmi",
    img: "JoQjwoG.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Baekhyun",
    img: "muvfdWZ.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Wonho",
    img: "T47Ch6Z.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Amber",
    img: "YSBMtAI.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Sana",
    img: "p6oEdmI.jpg",
    opts: {
      series: [ "IDOL" ],
      stage: []
    }
  },
  {
    name: "Changmin",
    img: "PuKYppL.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Woozi",
    img: "C3QlT8k.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Jongho",
    img: "vSocg6X.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Winwin",
    img: "JvluD1f.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Lay",
    img: "jDrWgne.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Hyerin",
    img: "g3CWP0F.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  },
  {
    name: "Anne",
    img: "4GW8oyO.jpg",
    opts: {
      series: ["IDOL"],
      stage: []
    }
  }
];

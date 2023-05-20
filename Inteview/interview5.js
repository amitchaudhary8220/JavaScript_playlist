const data = [
  {
    name: "menu1",
    link: "link",
    subitems: [
      {
        name: "menu2",
        link: "link",
      },
    ],
  },
  {
    name: "menu3",
    link: "link",
    subitems: [
      {
        name: "menu4",
        link: "link",
      },
      {
        name: "menu14",
        link: "link",
        subitems: [
          {
            name: "menu5",
            subitems: [{ name: "menu100" }],
          },
        ],
      },
      {
        name: "menu6",
        link: "link",
      },
    ],
  },
];

function pareseobj(a) {
  if (a.length == 0) return [];
  let arr = [];
  a.forEach((item) => {
    arr.push(item?.name);
    arr = [...arr, ...pareseobj(item?.subitems ?? [])];
  });

  return arr;
}

console.log(pareseobj(data));

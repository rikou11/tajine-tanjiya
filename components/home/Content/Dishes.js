
// 0 : for all
// 9  : for popular
// 10 : for  tagine
// 20 sweets
//40 : latest dishes


export const dishes = [
  {
    id: 1,
    name: "Couscous",
    image: "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken16.jpg",

    category: [0, 9,10,40],
    category_name: "Tagine",
    new: true,
  },
  {
    id: 2,
    name: "Harira",
    image: "https://foodish-api.herokuapp.com/images/biryani/biryani2.jpg",

    category: [0, 9, 10,40],
    category_name: "Tagine",
    new: true,
  },
  {
    id: 5,
    name: "Rfissa",
    image: "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken17.jpg",
    category_name: "Tagine",
    category: [0, 10],

    new: false,
  },
  {
    id: 0,
    name: "Chebakia",
    image: "https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken1.jpg",

    category: [0, 20],
category_name: "Sweets",
    new: false,
  },

  {
    id: 3,
    name: "Ghribiya",
    image: "https://foodish-api.herokuapp.com/images/pasta/pasta28.jpg",

    category: [0, 20,40],
category_name: "Sweets",
    new: true,
  },
  {
    id: 4,
    name: "briwa louz",
    image: "https://foodish-api.herokuapp.com/images/rice/rice28.jpg",

    category: [0, 20,40],
    category_name: "Sweets",
    new: true,
  },

  {
    id: 6,
    name: "Maqrot",
    image: "https://foodish-api.herokuapp.com/images/biryani/biryani54.jpg",

    category: [0, 9, 20,40],
    category_name: "Sweets",
    new: true,
  },
  {
    id: 7,
    name: "Chicken Tagine",
    image: "https://foodish-api.herokuapp.com/images/biryani/biryani3.jpg",

    category: [0, 10],
    category_name: "tagine",
    new: false,
  },
  {
    id: 8,
    name: "Tagine lhout",
    image: "https://foodish-api.herokuapp.com/images/biryani/biryani4.jpg",
    category_name: "Sea Food",
    category: [0, 10],

    new: false,
  },
];

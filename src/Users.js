import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        name: "Emma",

        img: "imgEmma.jpg",
        infoUser: [
          { itemName: "E-mail", item: "test@test.com" },
          { itemName: "City", item: "London" },
        ],
        saveData: [],
        saveItemName: "",
        saveItem: "",
      },
      {
        name: "Henry",

        img: "imgHenry.jpg",
        infoUser: [
          {
            itemName: "E-mail",
            item: "test@test.com",
            saveItemName: "",
            saveItem: "",
          },
          { itemName: "City", item: "London", saveItemName: "", saveItem: "" },
        ],
        saveData: [],
        saveItemName: "",
        saveItem: "",
      },
      {
        name: "Suzy",

        img: "imgBue.png",
        infoUser: [
          {
            itemName: "E-mail",
            item: "test@test.com",
            saveItemName: "",
            saveItem: "",
          },
          { itemName: "City", item: "Seul" },
        ],
        saveData: [],
        saveItemName: "",
        saveItem: "",
      },
    ],
  },
});

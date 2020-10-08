<template>
  <div class="profile">
    <img :src="require(`@/assets/${users.img}`)" :alt="users.name" />
    <h1>{{ users.name }}</h1>

    <br />
    <div class="newInfoValue">
      <input type="text" v-model="itemName" placeholder="Item name" />

      <input type="text" v-model="item" placeholder="Item" />
      <button class="addInfo" type="button" v-on:click="addComment()">
        Add info
      </button>
    </div>

    <div class="boxInfo" v-for="(user, index) in users.infoUser" :key="index">
      <h3 v-on:click="editItemName(index)">{{ user.itemName }}</h3>
      <div class="changeItemName">
        <input
          class="changeInfo"
          type="text"
          v-model="changeItemName"
          placeholder="Item name"
        />
        <button @click="accept(index)" class="acceptBtn">Accept</button>
        <button @click="cancel()" class="cancelBtn">Cancel</button>
      </div>

      <p v-on:click="editItem(index)">
        {{ user.item }}
      </p>
      <div class="changeItem">
        <input
          class="changeInfo"
          type="text"
          v-model="changeItem"
          placeholder="name"
        />
        <button class="acceptBtn" @click="accept(index)">Accept</button>
        <button class="cancelBtn" @click="cancel()">Cancel</button>
      </div>

      <div class="editBtn">
        <button type="button" v-on:click="deleteComment(index)">Delete</button>
      </div>
    </div>
    <button class="returnBtn" v-on:click="returnItem()">
      Return last item
    </button>
  </div>
</template>

<script>
import allUsers from "@/Users";

export default {
  data() {
    return {
      itemName: null,
      item: null,
      arr: [],

      changeItemName: null,
      changeItem: null
    };
  },
  props: {
    name: {
      type: String,
      require: true
    }
  },
  methods: {
    editItemName(index) {
      let changeItemName = document.querySelectorAll(".changeItemName");
      let changeItem = document.querySelectorAll(".changeItem");
      for (let i = 0; i < changeItemName.length; i++) {
        changeItemName[i].classList.remove("active");
        changeItem[i].classList.remove("active");
      }
      changeItemName[index].classList.add("active");
    },
    editItem(index) {
      let changeItem = document.querySelectorAll(".changeItem");
      let changeItemName = document.querySelectorAll(".changeItemName");
      for (let i = 0; i < changeItem.length; i++) {
        changeItem[i].classList.remove("active");
        changeItemName[i].classList.remove("active");
      }

      changeItem[index].classList.add("active");
    },
    cancel() {
      let changeItemName = document.querySelectorAll(".changeItemName");
      let changeItem = document.querySelectorAll(".changeItem");
      for (let i = 0; i < changeItem.length; i++) {
        changeItem[i].classList.remove("active");
        changeItemName[i].classList.remove("active");
      }
    },
    accept(index) {
      this.users.saveItemName = this.users.infoUser[index].itemName;
      this.users.saveItem = this.users.infoUser[index].item;

      if (this.changeItem == null && this.changeItemName == null) {
        return alert("Заповніть поле");
      }
      let accept = confirm("Accept changes?");
      if (accept) {
        if (this.changeItem !== null) {
          this.users.infoUser[index].item = this.changeItem;
          this.changeItem = null;
          this.cancel();
        }
        if (this.changeItemName !== null) {
          this.users.infoUser[index].itemName = this.changeItemName;
          this.changeItemName = null;
          this.cancel();
        }
      }
    },
    returnItem() {
      //Вертаєм останній видалений елемент
      //Якщо масив не пустий тоді запускаєм функцію
      if (this.users.saveData[0] !== undefined) {
        this.itemName = this.users.saveData[0].itemName;
        this.item = this.users.saveData[0].item;
        this.addComment();
        //Очищаєм масив з видаленими елементами після відновлення
        this.users.saveData = [];
      }

      console.log(this.users.saveData);
    },
    deleteComment(index) {
      let deleteInfo = confirm("You exactly want to delete the info");
      if (deleteInfo) {
        //Зберігаєм останній видалений item на 0 позицію щоб масиви не дублювались
        this.users.saveData[0] = this.users.infoUser[index];

        this.users.infoUser.splice(index, 1);
      } else {
        return false;
      }
    },
    addComment() {
      if (this.itemName == null || this.item == null) {
        alert("Заповніть поля");
        return false;
      } else {
        this.arr.push({ itemName: this.itemName, item: this.item });
        this.users.infoUser.push(...this.arr);
      }

      //Очищаєм поля і масив з даними
      this.itemName = null;
      this.item = null;
      this.arr = [];
      //Зберігаєм минулий результат тексту
      // this.users.saveItemName = this.itemName;
      // this.users.saveItem = this.item;
    },

    returtnLastchange(index) {
      this.users.infoUser[index].itemName = this.users.saveItemName;
      this.users.infoUser[index].item = this.users.saveItem;
      this.changeItemName = null;
      this.changeItem = null;
    }
  },
  computed: {
    users() {
      return allUsers.state.users.find(
        user => user.name.toLowerCase() === this.name
      );
    }
  }
};
</script>

<style scoped>
.profile {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 400px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.322);
}
.returnBtn {
  margin-top: 20px;
}
.changeItemName {
  display: none;
}
.changeItem {
  display: none;
}
.active {
  display: inline-block;
}
.acceptBtn,
.cancelBtn {
  background-color: #009148;
  padding: 5px 5px;
  border-radius: 50px;
  border: none;
  outline: none;
  margin-top: 10px;
}
.cancelBtn {
  background-color: orangered;
}
.changeInfoBox {
  display: none;
}
.editBtn {
  margin-top: 20px;
}
.newInfo {
  padding: 5px 10px;
  font-size: 20px;
  transition: 1s;
}

.newInfo:hover {
  color: #066399;
}
.newInfoValue {
  margin-top: 15px;
}
button {
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  color: white;
  background-color: black;
  border: solid 1px black;
}
p {
  color: gold;
}
h3 {
  color: indigo;
}

.profile {
  display: block;
}
img {
  width: 200px;
}
.addInfo {
  margin-top: 20px;
}
input {
  width: 50%;
  margin: auto;
  height: 10px;
  padding-top: 20px;
  color: #066399;
  font-weight: bold;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  font-size: 18px;
  background: none;
  border-bottom: 1px solid black;
}
</style>

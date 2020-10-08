<template>
  <div class="home">
    <h1>Contacts</h1>

    <img class="allUserImg" alt="allUser" src="../assets/allUsers.jpg" />
    <button type="button" @click="openForm" class="addContact">
      Add new Contact
    </button>
    <newContact v-if="form" form="" />

    <ul class="allUsersContacts">
      <li class="removeItem" v-for="(user, index) in users" :key="index">
        <router-link
          :to="{ name: 'InfoUsers', params: { name: user.name.toLowerCase() } }"
          ><img
            class="imgUserLink"
            :src="require(`@/assets/${user.img}`)"
            :alt="user.name"
          />
          {{ user.name }}</router-link
        >
        <button type="button" @click="deleteUser(index)">x</button>
      </li>
      <h1 v-if="users.length === 0">You dont have contacts</h1>
    </ul>
  </div>
</template>

<script>
import allUsers from "@/Users";
import newContact from "./NewContact";

export default {
  name: "Home",
  components: {
    newContact
  },

  data() {
    return {
      form: false,
      users: allUsers.state.users
    };
  },
  methods: {
    openForm() {
      if (this.form) {
        this.form = false;
      } else {
        this.form = true;
      }
    },
    deleteUser(index) {
      let deleteContact = confirm("You exactly want to delete the contact");

      if (deleteContact === true) {
        let items = document.querySelectorAll("li");
        items[index].style.transform = "translateY(-50px)";

        setTimeout(() => {
          items[index].style.transform = "translateY(0px)";
          allUsers.state.users.splice(index, 1);
        }, 1000);
      }
    }
  }
};
</script>
<style scoped>
.home {
  padding-top: 50px;
  padding-bottom: 50px;
  width: 400px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.322);
}
.allUsersContacts {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.removeItem {
  transition: all 1s ease;
}
.addContact {
  width: 100px;
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  background: #55b9f3;
  box-shadow: -20px -20px 60px #489dcf, 20px 20px 60px #62d5ff;
  transition: all 1s ease;
}
.addContact:hover {
  background-color: #2a8ec1;
  box-shadow: -20px -20px 60px #1d5a7e, 20px 20px 60px #1c87ad;
}
.allUserImg {
  width: 400px;
}
.imgUserLink {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: contain;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li > button {
  margin-top: 10px;
  cursor: pointer;
  background-color: #ae2423;
  border: none;
  outline: none;
  border-radius: 100px;
  width: 50px;
  font-weight: bold;
}
a {
  color: #066399;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 30px;
}
</style>

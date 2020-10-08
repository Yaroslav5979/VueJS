<template>
  <div class="newContact">
    <div class="form">
      <input type="text" v-model="nameUser" placeholder="Name" />
    </div>

    <label class="fileUpload">
      <input type="file" id="imageLoader" name="image" @change="changeImg" />
    </label>
    <br />
    <button class="сreate" @click="onUpload">
      Create
    </button>
    <img
      class="avatar"
      v-if="awesome"
      :src="require(`@/assets/${imgUser}`)"
      :alt="imgUser"
    />
  </div>
</template>

<script>
import allUsers from "@/Users";

export default {
  name: "newContact",

  data() {
    return {
      nameUser: "",
      awesome: false,
      imgUser: "znak-pitannya.jpg"
    };
  },
  methods: {
    changeImg(event) {
      this.imgUser = event.target.files[0].name;
      this.nameUser = "";
      console.log(this.imgUser);
    },
    onUpload() {
      if (this.nameUser === "") {
        return alert("Write the name");
      } else {
        allUsers.state.users.push({
          name: this.nameUser,
          img: this.imgUser,
          comments: []
        });
        this.nameUser = "";
      }
    }
  }
};
</script>



<style scoped>
.fileUpload {
  border: 1px solid #066399;
  display: inline-block;
  padding: 10px 5px;
  cursor: pointer;
  transition: 1s;
}
.fileUpload:hover {
  background-color: #066399;
  color: white;
}
.imgIsUpload {
  background-color: #066399;
  color: white;
}
.сreate {
  margin-top: 20px;
  width: 80px;
  height: 50px;
  border: none;
  outline: none;
  background-color: yellowgreen;
  border-radius: 50px;
  cursor: pointer;
}
input {
  -webkit-appearance: none;
}
.form {
  margin-top: 30px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
}
.form > input {
  width: 50%;
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

.contentName {
  position: absolute;
  bottom: 5px;
  transition: all 0.3s ease;
}

.avatar {
  width: 200px;
}
</style>
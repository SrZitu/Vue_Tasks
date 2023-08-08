<script setup>
import { ref} from 'vue'

const username = ref('');
const password = ref('');
const showSuccessMessage = ref(false);
const welcomeMessage=ref(false);
const showRegistrationForm = ref(true);
const showLoginForm = ref(true);

const userRegistration = () => {
  if (showRegistrationForm.value) {
    storeUserInfo(username, password);
    showSuccessMessage.value = true;
    username.value = '';
    password.value = '';
  }
};

const userLogin = () => {
  if (!showRegistrationForm.value) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(user =>
      user.username._value === username.value && user.password._value === password.value
    );

    if (matchedUser) {
      welcomeMessage.value = true; 
      showRegistrationForm.value = false;
      showLoginForm.value = false; 
    } else {
      console.log('Failed to log in');
    }
  }
};

const storeUserInfo = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.username === username);

  if (!userExists) {
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  return false;
}
</script>

<template>
  <section class="flex h-screen w-full">
    <div class="w-1/2"
      style="background-image: url(https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80); background-repeat: no-repeat; background-size: cover;">
      <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">SRZ IT!</h1>
    </div>
    <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">

      <div class="w-full max-w-xs" v-if="showRegistrationForm">
        <h2 class="mb-5 text-xl text-center">User Registration</h2>
        <form @submit.prevent="userRegistration" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div v-if="showSuccessMessage" class="mb-4 text-green-500">
            User registered successfully!
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input v-model="username"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input v-model="password"
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="password">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign Up
            </button>
            <a @click="showRegistrationForm = false"
              class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800" href="#">
              Or Login
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>

      <div class="w-full max-w-xs" v-else-if="showLoginForm">
        <h2 class="mb-5 text-xl text-center">Login</h2>
        <form @submit.prevent="userLogin" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input v-model="username"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input v-model="password"
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="password">
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Log In
            </button>
            <a @click="showRegistrationForm = true"
              class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800" href="#">
              Or Register
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
      <div v-show="welcomeMessage" class="mb-4 text-green-500">
        welcome!You have logged in successfully!
      </div>
    </div>

  </section>
</template>
<style scoped></style>
<!-- .vitepress/theme/Custom404.vue -->
<script setup>
import { useData } from 'vitepress'

const { site } = useData()
</script>

<template>
  <div class="custom-404">
    <div>
      <img width="540" src="/img/404_z4xiwg.webp">
    </div>

    <h1> <strong>Womp Womp!</strong></h1>
    <p style="font-size: 25px;">You have reached the end of the internet!</p><br>
    <p>Looks like you need to go outside and touch some grass :)</p>
    <p>Until then, you can get back on track with the following links:</p><br>

    <ul class="btns">
      <li><a :href="site.base" class="button-34">Go to Homepage</a> </li>
     <li> <a href="#" onclick="history.back()" @click="$router.go(-1)"  class="button-34"> Go Back</a></li>
    </ul>
  </div>
</template>

<style scoped>
.custom-404 {
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  display: block;
  margin: 0 auto;
  padding: 20px 20px 50px 20px;
}

/* CSS */
.button-34 {
  background: #5E5DF0;
  border-radius: 999px;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  color: #FFFFFF;
  cursor: pointer;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji", NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji", EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 10px 20px; /* Adjusted padding */
  width: auto; /* Changed from fit-content to auto */
  max-width: 200px; /* Set a max-width for the button */
  border: 0;
  transition: ease-in-out 0.2s;
}

  .btns {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
  }

  a,
  a:hover,
  a:focus,
  :hover {
    text-decoration: none;
  }

  .button-34:hover {
    background: #403ff9;
    transition: ease-in-out 0.2s;
  }

@media (max-width: 600px) {
  .button-34 {
    font-size: 14px; /* Adjust font size for smaller screens */
    padding: 8px 16px; /* Responsive padding */
    width: auto; /* Keep width auto */
  }
}

</style>
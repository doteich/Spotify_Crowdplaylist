<template>
<div>
   
  <navigation></navigation>
  <router-view/>

  </div>
</template>


<script>
import navigation from "./components/navigation/navigation"

export default{
  components:{
    navigation
    
  }

}

</script>

<style>
body{

  background-image:url("../public/background_img.jpg");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo{
  height: 100px;
  width: 100px;
}
</style>

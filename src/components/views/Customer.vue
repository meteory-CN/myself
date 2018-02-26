<template>
 <P>
   Hello this is  a  customer modele
 </P>
</template>

<script>
export default {
  beforeMount: function() {
      let a1 = [1,2,3]
      let b1 = [4,5,6]
      let a3 = [b1,7,8,9]
      let a4 = [...b1,10,11,12]
      console.log(a3);
      console.log(a4);

      // console.log(typeof(a1+b1))
      // return console.log(a1+b1);

    }
  }


</script>

<style>
</style>

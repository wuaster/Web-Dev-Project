<template>
<body>
    <div>
        <h1 style = "font-family: Calibri; text-align:center;font-size:60px">Front End</h1>
        <br>
        <br>
        <h2 style = "font-family: Calibri; text-align:center">How to Develop a Good Looking Website Page</h2>
        <br>
        <p class="blocktext text">Vuetify provides several components that allow us to customize our website. 
            One of the elements that we included was the v-toolbar component, which allows us to create a toolbar on the top of our website. 
            Having the toolbar makes it very simple for users to switch between pages.</p>
        <p class="blocktext text">The fragment of code we have provided below displays how we implemented the toolbar 
            into our website. After creating the toolbar we customized it with various components, such as displaying icons beside each option.</p>
        <img src="/toolbar1.png" alt="" style="width:900px;height:525px;" class="center">
        <br>
        <br>

        <p class="blocktext text">This next picture displays how we linked the drawer on our toolbar to the rest of the pages.</p>
        <img src="/toolbar2.png" alt="" style="width:900px;height:350px;" class="center">
        <br>
        <br>

        <p class="blocktext text">For the top of our dog browsing page, we created a header by using the v-toolbar-title component.
            The following code shows how we design the top of the page and how we implement the v-toolbar-title component to resemble a header.</p>  
        <img src="/demo1.png" alt="" style="width:900px;height:175px;" class="center">
        <br>
        <br>

        <p class="blocktext text">For the main part of our page, we used the v-container componenet to create a twelve point grid system. Then we implemented 
            the v-card and v-avatar components to fill each of the elements in the grid with a dog, while also displaying their name, breed, and personality.</p>
        <img src="/demo2.png" alt="" style="width:900px;height:465px;" class="center">
        <br>
        <br>

        <p class="blocktext text">This last segment of code shows how we linked each element in the grid to each of the dogs and their cards.</p>
        <img src="/demo3.png" alt="" style="width:900px;height:400px;" class="center">
        <br>
        <br>

        <br>
        <h1 style = "font-family: Calibri; text-align:center;font-size:60px">Back End</h1>
        <br>
        <br>
        <h2 style = "font-family: Calibri; text-align:center">How to Develop a Good Looking Website Page</h2>
        <br>
    </div>
</body>
</template>


<script>
// @ is an alias to /src
export default {
}
</script>
<style>
body {color: darkgoldenrod}
h3 {color: darkgoldenrod;}
h2 {color: steelblue;}

.box{
    margin: auto;
    border: 3px double steelblue; 
    width:1500px; height:900px;
    padding:10px;
}

p.blocktext {
    margin-left: auto;
    margin-right: auto;
    width: 40em;
    font-size: 18px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
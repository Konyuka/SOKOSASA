<template>
  <div class="modal-backdrop">
    <div class="modal">
      <slot name="header">
      </slot>

      <slot name="body">
      </slot>

      <slot name="footer">
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          This is the default tile!

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          I'm the default body!
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              @click="close"
            >
              Close me!
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>


<div class="form-group d-flex">
    <div class="p-1" v-for="(image, index) in product.images">
        <div class="img-wrapp">
            <img :src="image" alt="" width="80px">
            <span class="delete-img" @click="deleteImage(image,index)"> <b>X</b> </span>
        </div>
    </div>
</div>

@click.native="modals.classic = true"

methods: {
      sendWhatsapp() {
        /* this is the magic */
        window.open(
          `https://api.whatsapp.com/send?phone=${this.country.default.callingCode}${this.phoneNumber}&text=${this.message.text}`,
          "_blank"
        );
      }
    }

this.product.images && this.product.name && this.product.category && this.product.county && this.product.farmer && this.product.phone && this.product.price && this.product.type

const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    age: null,
    movie: null
  },
  methods:{

    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.age) {
        this.errors.push('Age required.');
      }

      e.preventDefault();
    }
  }
})

<!-- Second Featured Product -->
<div class="container">
<div class="title">
    <h4>Product Name</h4>
</div>
<div class="row">
  <div class="col-md-10 ml-auto col-xl-5 mr-auto">
    <el-carousel height="230px">
      <el-carousel-item>
        <img class="d-block" src="img/products/carrot.jpg" alt="First slide" />
      </el-carousel-item>
      <el-carousel-item>
        <img class="d-block" src="img/products/carrot1.jpg" alt="Second slide" />
      </el-carousel-item>
      <el-carousel-item>
        <img class="d-block" src="img/products/carrot2.jpg" alt="Third slide" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="col-md-10 ml-auto col-xl-7 mr-auto">
    <!-- Tabs with Background on Card -->
    <div class="card">
      <tabs
        centered
        type="neutral"
        tab-nav-wrapper-classes="card-header"
        tab-content-classes="card-body text-center"
        data-background-color="green"
      >

        <!-- Pricing Info -->
        <tab-pane>
          <template slot="label">
            <i class="fas fa-tags"></i> Pricing
          </template>
          <div class="container">
            <div class="row">
              <div class="col-4">
              <h5>Price Per KG:</h5>
              <button class="btn btn-primary btn-sm"><!---->KSHS. 1750<!----></button>
              </div>
              <div class="col-4">
              <h5>Harvest Date:</h5>
              <button class="btn btn-primary btn-sm"><!---->July 12th<!----></button>
              </div>
              <div class="col-4">
              <h5>Location:</h5>
              <button class="btn btn-primary btn-sm"><!---->Nyeri<!----></button>
              </div>
            </div>
          </div>
        </tab-pane>
        <!-- Description -->
        <tab-pane>
          <template slot="label">
            <i class="fas fa-edit"></i> Details
          </template>
          <p>
            Product Description by Farmer Here. The description can be as long as it can be so that the farmer can expound in detail
          </p>
        </tab-pane>
        <!-- Contacts Info -->
        <tab-pane>
          <template slot="label">
            <i class="fas fa-user"></i> Farmer
          </template>
          <div class="container">
            <div class="row">
              <div class="col-4">
              <h5>Farmer's Name:</h5>
              <span> <i class="fas fa-user"></i> John Kiriamiti </span>
              </div>
              <div class="col-4">
              <h5>Phone Number:</h5>
              <span> <i class="fas fa-phone"></i> 254716202287 </span>
              </div>
              <div class="col-4">
              <h5>Verification:</h5>
              <span> <i class="fas fa-check"></i> Verified </span>
              </div>
            </div>
          </div>
        </tab-pane>

      </tabs>
    </div>
    <!-- End Tabs on plain Card -->
  </div>
</div>
</div>


<div id="app">

  <select v-model="selectedDrink" @change="selectDrink">
    <option v-for="(drink,index) in drinks" :value="index">{{ drink.label }}</option>
  </select>

  <select v-model="selectedOption" v-if="options.length">
    <option v-for="option in options">{{ option }}</option>
  </select>

  <p v-if="selectedOption">
    You selected a {{ selectedDrinkLabel }} and specifically {{ selectedOption }}.
  </p>

</div>


const app = new Vue({
  el:'#app',
  data:{
    drinks:[
      {
        label:"Beer",
        options:["Sam Adams","Anchor Steam","St. Arnold"]
      },
      {
        label:"Soda",
        options:["Pepsi","Coke","RC"]
      },
      {
        label:"Coffee",
        options:["Starbucks","Dunkin Donuts","Gross Hotel Room"]
      }
    ],

    selectedDrink:-1,
    selectedOption:'',
    options:[],
    selectedDrinkLabel:''
  },
  methods:{
    selectDrink:function() {
      this.selectedOption = '';
      this.options = this.drinks[this.selectedDrink].options;
      this.selectedDrinkLabel = this.drinks[this.selectedDrink].label;
    }
  }
});



<div id="app">
  <select class="form-control" @change="changeJobTitle($event)">
    <option value="" selected disabled>Choose</option>
    <option v-for="jobTitle in jobTitles" :value="jobTitle.id" :key="jobTitle.id">{{ jobTitle.name }}</option>
  </select>
  <br><br>
  <p><span>Selected job title: {{ selectedJobTitle  }}</span></p>
</div>

new Vue({
  el: "#app",
  data: {
    jobTitles: [
      { name: "Product designer", id: 1 },
      { name: "Full-stack developer", id: 2 },
      { name: "Product manager", id: 3 },
      { name: "Senior front-end developer", id: 4 }
    ],
    selectedJobTitle: null
  },
  methods: {
  	changeJobTitle (event) {
      this.selectedJobTitle = event.target.options[event.target.options.selectedIndex].text
    }
  }
})

const app = new Vue({
  el:'#app',
  data:{
    drinks:[
      {
        label:"Beer",
        options:["Sam Adams","Anchor Steam","St. Arnold"]
      },
      {
        label:"Soda",
        options:["Pepsi","Coke","RC"]
      },
      {
        label:"Coffee",
        options:["Starbucks","Dunkin Donuts","Gross Hotel Room"]
      }
    ],

    selectedDrink:-1,
    selectedOption:''
  }
});

<div id="app">

  <select v-model="selectedDrink">
    <option v-for="drink in drinks" :value="drink">{{ drink.label }}</option>
  </select>

  <select v-model="selectedOption">
    <option v-for="option in selectedDrink.options">{{ option }}</option>
  </select>

  <p v-if="selectedDrink&&selectedOption">
    You selected a {{ selectedDrink.label }} and specifically {{ selectedOption }}.
  </p>

</div>

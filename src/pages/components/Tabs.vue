<template>
  <div class="section ">
    <div class="container">

      <div class="col-12 mt-2">
        <!-- Product Filters  -->
        <form class="" action="#" method="post">

          <div class="row">

            <div class="col-sm-2 col-xs-2 col-md-6">
              <div class="form-group">
                <div class="">
                  <label for="category"> <h6>PRODUCT CATEGORY:</h6> </label>
                  <select id="category" class="form-control" v-model="selectedCategory" @change="selectCategory">
                    <option value="">No Category Selected</option>
                    <option v-for="(category, index) in categories" :value="index">{{ category.label }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-sm-2 col-xs-2 col-md-6">
              <div class="form-group">
                <div class="">
                  <label for="product"> <h6>PRODUCTS IN: {{ selectedCategoryLabel  }}</h6> </label>
                  <select id="product" class="form-control" v-model="selectedOption">
                    <option value="">No Option Selected</option>
                    <option v-for="(option, index) in options">{{ option }}</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
          <div class="row">

            <div class="col-sm-3 col-lg-6">
              <div class="form-group">
                <div class="">
                  <label for="month"> <h6>HARVEST MONTH:</h6> </label>
                  <select v-model="selectedMonth" id="month" class="form-control">
                    <option value="">Any Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="col-sm-3 col-lg-6">
              <div class="form-group">
                <div class="">
                  <label for="county"> <h6>county:</h6> </label>
                  <select id="county" v-model="selectedCounty" class="form-control">
                    <option value="">Any County</option>
                    <option>Bomet</option>
                    <option>Baringo</option>
                    <option>Embu</option>
                    <option>Garissa</option>
                    <option>Homa Bay</option>
                    <option>Isiolo</option>
                    <option>Kisumu</option>
                    <option>Kiambu</option>
                    <option>Kisii</option>
                    <option>Kericho</option>
                    <option>Kirinyaga</option>
                    <option>Kitui</option>
                    <option>Kajiado</option>
                    <option>Kwale</option>
                    <option>Kilifi</option>
                    <option>Lamu</option>
                    <option>Laikipia</option>
                    <option>Meru</option>
                    <option>Murang'a</option>
                    <option>Machakos</option>
                    <option>Migori</option>
                    <option>Makueni</option>
                    <option>Marakwet</option>
                    <option>Mandera</option>
                    <option>Marsabit</option>
                    <option>Nairobi</option>
                    <option>Nakuru</option>
                    <option>Nyeri</option>
                    <option>Nyamira</option>
                    <option>Nyandarua</option>
                    <option>Nandi</option>
                    <option>Narok</option>
                    <option>Siaya</option>
                    <option>Samburu</option>
                    <option>Trans Nzoia</option>
                    <option>Tharaka Nithi</option>
                    <option>Taita Taveta</option>
                    <option>Tana River</option>
                    <option>Turkana</option>
                    <option>Uasin Gishu</option>
                    <option>West Pokot</option>
                    <option>Wajir</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          <div class="pull-right">
            <button class="btn btn-primary btn-round btn-sm" @click.prevent="search"> <span> <i class="fas fa-search"></i> {{searchButton}} </span> </button>
          </div>


        </form>
        <div class="clearfix mt-20"></div>
        <!-- End of Product Filters  -->
      </div>

      <!-- First Featured Product -->
      <div v-if="products.length > 0">
        <div class="container" v-for="product in products ">
          <div class="title smallFontTitle">
            <div class="col-4">

            </div>
            <div class="col-8">
              <div class="">

                <h4 class="fontings">{{ product.name }}</h4>

              </div>
            </div>
          </div>
          <div class="row">

            <div class="col-md-3 ml-auto col-xl-3 mr-auto">
              <el-carousel height="350px"  class="kora">
                <el-carousel-item v-for="(image, index) in product.images">
                  <div class="img-con">
                    <img class="d-block" :src="image" alt="First slide" />
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="col-md-10 ml-auto col-xl-9 mr-auto">
              <div class="mt-5 newSoko">

              </div>
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
                      <span class="smallFontLabel"> <i class="fas fa-tags"></i> Pricing </span>
                    </template>
                    <div class="container">
                      <div class="d-flex justify-content-between">
                        <div class="col-4">
                          <h6 class="smallFontHead">Pricing:</h6>
                          <p class="smallFontNumber text-primary">{{product.price}}</p>
                        </div>
                        <div class="col-4">
                          <h6 class="smallFontHead">Harvest:</h6>
                          <p class="smallFontNumber">{{product.month}}</p>
                        </div>
                        <div class="col-4">
                          <h6 class="smallFontHead">County:</h6>
                          <p class="smallFontNumber">{{product.county}}</p>
                        </div>
                      </div>
                    </div>
                  </tab-pane>
                  <!-- Description -->
                  <tab-pane>
                    <template slot="label">
                      <span class="smallFontLabel"> <i class="fas fa-edit"></i> Details </span>
                    </template>
                    <div class="container">
                      <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10">
                          <p class="smallFontNumber flexBox">{{product.description}}</p>
                        </div>
                        <div class="col-1"></div>
                      </div>
                    </div>
                  </tab-pane>
                  <!-- Contacts Info -->
                  <tab-pane>
                    <template slot="label">
                      <span class="smallFontLabel"> <i class="fas fa-user"></i> Farmer </span>
                    </template>
                    <div class="container">
                      <div class="row">
                        <div class="col-4">
                          <h6>Name:</h6>
                          <span class="smallFontNumber">  {{ product.farmer }} </span>
                        </div>
                        <div class="col-4">
                          <h6>Phone:</h6>
                            <span>
                              <n-button type="primary" @click.native="modals.classic = true" @click="passId(product)">
                                 <span>Request</span>
                              </n-button>
                            </span>
                        </div>
                        <div class="col-4">
                          <h6>Status:</h6>
                          <span class="smallFontNumber"> <i class="fas fa-check text-primary"></i> Verified </span>
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
        <!-- Modal Start -->
        <modal :show.sync="modals.classic" headerClasses="justify-content-center">
           <h4 slot="header" class="title title-up">Contact Details</h4>
               <el-carousel height="350px"  class="kora">
                 <el-carousel-item v-for="(image, index) in product.images">
                   <div class="img-con">
                     <img class="d-block" :src="image" alt="First slide" />
                   </div>
                 </el-carousel-item>
               </el-carousel>
               <hr>
             <div class="row">
               <div class="col-4">
                  <h6> <i class="fas fa-user text-primary"></i> <span class="text-secondary"> {{product.farmer}}</span></h6>
               </div>
               <div class="col-4">
                  <h6> <i class="fas fa-map-marker text-primary"></i> <span class="text-secondary"> {{product.county}}</span></h6>
               </div>
               <div class="col-4">
                  <h6> <i class="fas fa-check text-primary"></i> <span class="text-secondary"> Verified</span> </h6>
               </div>
             </div>
             <div class="row">
               <div class="col-sm-6 col-lg-12">
                 <p class="category">Accept <a href="#"><span class="text-primary">Terms & Conditions</span></a> to Contact Farmer</p>
                 <n-switch
                   v-model="switches.defaultOff"
                   on-text="Yes"
                   off-text="No"
                 ></n-switch>
               </div>
             </div>
           <template slot="footer">
             <n-button type="primary"  @click="dial(product.phone)"> <span> <i class="fas fa-phone"></i> Call Number</span> </n-button>
             <div class="">
               <hr>
             </div>
             <n-button type="primary" @click="sendWhatsapp(product.phone)"> <span> <i class="fab fa-whatsapp"></i> Chat on Whatsapp</span> </n-button>
           </template>
        </modal>
         <!-- Modal End -->
      </div>
      <div v-else>
        <div class="container">
          <h2 class="text-center">No Such Products Posted Yet</h2>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


import {db} from '@/firebase';
import { Card, Tabs, TabPane, Button, Modal, Switch } from '@/components';
import { Carousel, CarouselItem } from 'element-ui';

export default {
  name: "add-to-save",
  props: {
    name: String,
    price: String,
    image: String,
    county: String,
    month: String,
    pId: String
  },

  components: {
    [Switch.name]: Switch,
    Modal,
    Card,
    Tabs,
    TabPane,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,

    [Button.name]: Button
  },


  data(){
      return {
          switches: {
            defaultOn: true,
            defaultOff: false
          },
          modals:null,
          showModal: false,
          modals: {
            classic: false
          },
          products: [],
          product: {
            name:null,
            description:null,
            price:null,
            county:null,
            phone:null,
            tags:[],
            images:[]
          },
          categories: [
          {
            label: "Vegetables",
            options: ["Khales", "Cabbages", "Spinach", "Oninons", "Lettuce", "Managu", "Terere", "Mrenda", "Mitoo", "Nderema", "Kunde", "Broccoli", "Chilli", "Cucumber", "Capsicums", "Brinjals", "Cauliflower", "Lettuce", "Coriander", "Mashrooms", "Courgettes", "Pumkins" ]
          },
          {
            label: "Fruits",
            options: ["Oranges", "Apples", "Bananas", "Tomatoes", "Pears", "Strawberry", "Avocados", "Grapes", "Passion", "Oranges", "Lemon", "Mangoes", "Lime", "Pineapples", "Watermelon", "Tamarind" ]
          },
          {
            label: "Cereal & Bean",
            options: ["Beans", "Maize", "Green Grams", "Wheat", "Rice", "Millet", "Sorghum", "Peas", "Ground Nuts", "Soya", "Oats", "Simsim" ]
          },
          {
            label: "Tubers",
            options: ["Arrow Roots", "Cassava", "Potatoes", "Carrots", "Sweet Potatoes", "Beet Roots", "Irish Potatoes"]
          },
          {
            label: "Poultry",
            options: ["Chicken", "Turkey", "Goose", "Duck", "Quail", "Eggs"]
          },
          {
            label: "Dairy",
            options: ["Camel Milk", "Goat Milk", "Dairy Milk"]
          },
          {
            label: "Livestock",
            options: ["Goat", "Sheep", "Pigs", "Turkeys", "Horses", "Diary Cows", "Beef Cows", "Dairy Goats", "Goat Meat", "Camels", "Donkeys"]
          },
          {
            label: "Herbs & Spices",
            options: ["Pili Pili", "Ginger", "Ghalic", "Coconut", "Mwarubaine", "Rosemary", "Aloe Vera", "Chia Seeds", "Okra" ]
          },
          {
            label: "Flowers",
            options: ["Lavender", "Rose", "Sunflower", "lily"]
          }

          ],

          selectedCategory: '',
          selectedOption: '',
          options: [],
          selectedCategoryLabel: '',
          selectedMonth: '',
          selectedCounty: '',
          searchButton: 'Search',
          allProducts: [],

          callingCode: "254"

      }
    },

  methods:{
    passId(product){
      this.product = product;
      console.log(product.farmer)

    },
    dial: function(number){
      window.location ='tel:'+number;
    },
    sendWhatsapp(number) {
      var yourMessage = 'Hi, i would like to discuss with you about a product you posted on Soko Sasa';
      var message = yourMessage.split(' ').join('%20')
      /* this is the magic */
      window.open(
        `https://api.whatsapp.com/send?phone=${this.callingCode}+${number}&text=${message}`,
        "_blank"
      );
    },
    async search(){
      this.searchButton = 'Searching ...'
      const vm = this
      if(this.allProducts.length === 0){
        this.allProducts = this.products
      }
      this.products = await this.allProducts
      // await this.$binding("products", db.collection("products"))
      //         .then((products) => {
      //           this.products = products
      //         })
      if(this.selectedCategory !== ''){
        const category = this.categories[this.selectedCategory]
        // console.log(category.label)
        this.products = this.products.filter(function (e) {
          return e.category === category.label
        })
      }
      if(this.selectedMonth !== '') {
        this.products = this.products.filter(function (e) {
          return e.month === vm.selectedMonth
        })
      }
      if(this.selectedCounty !== '') {
        this.products = this.products.filter(function (e) {
          return e.county === vm.selectedCounty
        })
      }

      this.searchButton = 'Search'
    },
      getImage(images){
        return images[0];
      },
    selectCategory: function() {
      this.selectedOption = '';
      this.options = this.categories[this.selectedCategory].options;
      this.selectedCategoryLabel = this.categories[this.selectedCategory].label;
    }

    },

  firestore(){
        return {
          products: db.collection('products'),
        }
    },

};

</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>

<template>
    <div class="products">
        <div class="container">

            <div class="intro h-100 newSoko">
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h1>Products Page</h1>
                    </div>
                </div>
                <hr>
            </div>


            <div class="product-test">


                <h3 class="d-inline-block">Products list</h3>
                <div class="notif">
                    <button @click="addNew" class="btn btn-primary float-right flexinglessly"><span>
                      <i class="fas fa-plus"></i>  Add Product </span>
                    </button>

                </div>
                <div class="table-responsive notif">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th class="newSoko">Price</th>
                            <th class="newSoko">Location</th>
                            <th>Modify</th>
                        </tr>
                        </thead>

                        <tbody>
                        <!-- :key="post.id" -->
                        <tr v-for="product in products">
                            <td>
                                {{product.name}}
                            </td>
                            <td class="newSoko">
                                {{product.price}}
                            </td>
                            <td class="newSoko">
                                {{product.county}}
                            </td>
                            <td class="flexingless">
                                <button class="btn btn-primary flexing" @click="editProduct(product)"><span> <i
                                        class="fas fa-edit"></i> Edit</span></button>
                                <button class="btn btn-warning flexing" @click="deleteProduct(product)"><span> <i
                                        class="fas fa-check"></i> Sold</span></button>
                            </td>

                        </tr>


                        </tbody>
                    </table>
                </div>

            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade notif" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content modekai">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editLabel" v-if="modal == 'new'"> Add Product <span><i
                                class="fas fa-plus"></i></span></h5>
                        <h5 class="modal-title" id="editLabel" v-if="modal == 'edit'">Edit Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">


                        <div class="alert alert-warning" role="alert" v-if="errors.length">
                          <b> <span> <i class="fas fa-exclamation-triangle" ></i> </span>  Please Provide More Data for the Product Before Posting</b>
                          <ul>
                            <li v-for="error in errors">{{ error }}</li>
                          </ul>
                        </div>

                        <div class="row">
                            <!-- main product -->
                            <div class="col-md-8">

                                <div class="form-group">
                                    <input type="text" placeholder="Product Name" v-model="product.name"
                                           class="form-control">
                                </div>

                                <!--                     <input type="hidden" name="user_id" :value="product.user_id">-->
                                <hr>

                                <div class="form-group">
                                    <div class="row">

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="">
                                                    <label for="category">Select Your Category</label>
                                                    <select id="category" class="form-control"
                                                            v-model="selectedCategory" @change="selectCategory">
                                                        <option v-for="(category, index) in categories" :value="index">
                                                            {{ category.label }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="">
                                                    <label for="product">Products in: {{ selectedCategoryLabel
                                                        }} </label>
                                                    <select class="form-control" v-model="selectedOption"
                                                            @change="selectOption">
                                                        <option v-for="option in options">{{ option }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="">
                                                    <label for="product1">Harvest Month </label>
                                                    <select id="product1" class="form-control" v-model="product.month" @change="selectDate">
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

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <div class="">
                                                    <label for="county">County </label>
                                                    <select id="county" class="form-control" v-model="product.county">
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
                                </div>
                                <hr>

                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <input type="text" placeholder="Product price" v-model="product.price"
                                                   class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" placeholder="Farmer's Name" v-model="product.farmer"
                                                   class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" placeholder="phone starting with 07..."
                                                   v-model="product.phone" class="form-control">
                                        </div>
                                        <hr>
                                    </div>
                                    <hr>
                                    <div class="col-5 col-sm-1 col-md-5 kwenda desk">
                                        <div class="form-group">
                                            <textarea v-model="product.description" name="name" rows="6" cols="17"
                                                      placeholder="Product Description i.e You can Specifiy the seed types..."></textarea>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- product sidebar -->
                            <div class="col-md-4">

                                <!-- <div class="form-group">
                                    <input type="text" @keyup.enter="addTag"
                                           placeholder="Tags i.e cabbages, Vegetables.. Separte tags with Enter Key"
                                           v-model="tag" class="form-control">

                                    <div class="d-flex">
                                        <p v-for="tag in product.tags">
                                            <span class="p-1">{{tag}}</span>
                                        </p>

                                    </div>
                                </div>

                                <hr> -->

                                <div class="form-group">
                                    <label for="product_image"> Product Image <span><i
                                            class="fas fa-caret-down newSoko"></i></span> </label>
                                    <button @change="uploadImage" type="file" name="button" class="btn btn-success">
                                        <span> <i class="fas fa-image"></i> </span> Select Images
                                    </button>
                                    <input id="product_image" type="file" @change="uploadImage" class="form-control">
                                </div>

                                <div>
                                    <p>
                                        Upload Progress: {{uploadValue.toFixed()+"%"}}
                                        <progress id="progress" :value="uploadValue" max="100"></progress>
                                    </p>
                                </div>

                                <div class="form-group d-flex">
                                    <div class="p-1" v-for="(image, index) in product.images">
                                        <div class="img-wrapp">
                                            <img :src="image" alt="" width="80px">
                                            <span class="delete-img" @click="deleteImage(image,index)"> <b>X</b> </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i
                                class="fas fa-times"></i> Close
                        </button>
                        <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'"><i
                                class="fas fa-paper-plane"></i> Post Product
                        </button>
                        <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'"><i
                                class="fas fa-save"></i> Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Imported Modal -->
        <div>

        </div>


    </div>
</template>

<script>

    import {fb, db} from '@/firebase';


    export default {
        name: "Products",

        components: {},
        props: {
            msg: String
        },

        data() {
            return {
              errors: [],
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
                selectedCategory: -1,
                selectedOption: '',
                options: [],
                selectedCategoryLabel: '',

                uploadValue: 0,

                products: [],

                profile: {
                    name: null,
                    phone: null,
                    address: null,
                    postcode: null
                },


                product: {

                    selectedOption: '',
                    selectedCategoryLabel: '',

                    farmer: null,
                    phone: null,
                    farmerVerified: null,
                    user_id: null,
                    email: null,

                    id: null,
                    name: null,
                    category: null,
                    type: null,
                    month: null,
                    size: null,
                    county: null,
                    description: null,
                    price: null,
                    tags: [],
                    images: []
                },

                activeItem: null,
                modal: null,
                tag: null,
                email: null
            }
        },

        firestore() {
            const user = fb.auth().currentUser;
            return {
                products: db.collection('products').where('user_id','==',user.uid),
                profile: db.collection('profiles').doc(user.uid),
            }
        },
        methods: {

            selectDate: function () {

            },
            selectCategory: function () {
                this.selectedOption = '';
                this.options = this.categories[this.selectedCategory].options;
                this.selectedCategoryLabel = this.categories[this.selectedCategory].label;
                this.product.category = this.selectedCategoryLabel;
                this.product.type = this.selectedOption;
            },
            selectOption: function () {

                this.product.type = this.selectedOption;
            },
            deleteImage(img, index) {

                let image = fb.storage().refFromURL(img);

                this.product.images.splice(index, 1);

                image.delete().then(function () {
                    console.log('image deleted');
                }).catch(function (error) {
                    // Uh-oh, an error occurred!
                    console.log('an error occurred');
                });

            },
            addTag() {
                this.product.tags.push(this.tag);
                this.tag = "";
            },
            uploadImage(e) {

                if (e.target.files[0]) {

                    let file = e.target.files[0];

                    var storageRef = fb.storage().ref('products/' + Math.random() + '_' + file.name);

                    let uploadTask = storageRef.put(file);

                    uploadTask.on('state_changed', (snapshot) => {
                        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    }, (error) => {
                        // Handle unsuccessful uploads
                    }, () => {
                        this.uploadValue = 100;
                        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                            this.product.images.push(downloadURL);
                        });

                    });

                }


            },
            reset() {
                this.product = {
                    name: null,
                    description: null,
                    price: null,

                    category: null,
                    type: null,
                    month: null,
                    size: null,
                    county: null,

                    tags: [],
                    images: []

                }
            },
            addNew() {
                this.modal = 'new';
                this.reset();
                $('#product').modal('show');
            },
            updateProduct() {
                let user = fb.auth().currentUser;
                this.product.user_id = user.uid;
                db.collection("products").doc(this.product.id).update(this.product);
                Toast.fire({
                    type: 'success',
                    title: 'Updated  successfully'
                })

                $('#product').modal('hide');
            },
            editProduct(product) {
                this.modal = 'edit';
                this.product = product;
                $('#product').modal('show');
            },
            deleteProduct(doc) {


                Swal.fire({
                    title: 'Congratulations',
                    text: "This product will be deleted from Soko Sasa",
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#228B22',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        db.collection("sales").doc().set(this.product)
                        db.collection("products").doc(doc.id).delete()

                        Toast.fire({
                            type: 'success',
                            title: 'Deleted  successfully'
                        })


                    }
                })


            },
            readData() {


            },
            addProduct() {

                if ( this.product.name ) {

                  // user: user.uid,
                  let user = fb.auth().currentUser;
                  this.product.createdOn = new Date();
                  this.product.user_id = user.uid;
                  // this.$firestore.products.add(this.product);

                  db.collection("products").doc().set(
                      this.product
                  )

                  Toast.fire({
                      type: 'success',
                      title: 'Product posted to Soko Sasa successfully'
                  })

                  $('#product').modal('hide');

                }

                this.errors = [];

                if (!this.product.name) {
                  this.errors.push('Product Name is required.');
                }
                if (!this.product.category) {
                  this.errors.push('Product Category is required.');
                }
                if (!this.product.county) {
                  this.errors.push('Location is required.');
                }
                if (!this.product.farmer) {
                  this.errors.push('Contact Name is required.');
                }
                if (!this.product.phone) {
                  this.errors.push('Contact Phone is required.');
                }
                if (!this.product.price) {
                  this.errors.push('Product Price required.');
                }
                if (!this.product.type) {
                  this.errors.push('Product Type is required.');
                }
                if (!this.product.images.length) {
                  this.errors.push('Upload Product Photo(s)');
                }



            }

        },

        created() {
            let user = fb.auth().currentUser;
            this.email = user.email;
            this.profile.name = user.displayName;
        }


    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .img-wrapp {
        position: relative;
    }

    .img-wrapp span.delete-img {
        position: absolute;
        top: -20px;
        left: -4px;
    }

    .img-wrapp span.delete-img:hover {
        cursor: pointer;
    }

</style>

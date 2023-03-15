<script setup>
import MainSale from './../components/componentsHome/MainSale.vue'
import MainAdv from './../components/componentsHome/MainAdv.vue'
import MainContentBox from './../components/componentsHome/MainContentBox.vue'
import MainContentRightBanner from './../components/componentsHome/MainContentRightBanner.vue'
import MainSupperSale from './../components/componentsHome/MainSupperSale.vue'
import MainCartCream from './../components/componentsHome/MainCartCream.vue'

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 120 * 700 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = "Expires in :" + days + ": " + hours + ": "
        + minutes + ": " + seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

const listFood = {

}

</script>

<template>
    <div>

        <div class="main">
            <div class="main-space session-box " >
                <div class="main-link">
                    <div class="dropdown">
                        <button class="dropbtn">
                            <i class="fa-solid fa-bars-staggered"></i>

                            All Categories</button>

                        <div class="dropdown-content">
                            <div class="Categorie">
                                <ul>
                                    <li> <img src="/assets/img/main-categori/vegetable.svg" alt="">
                                        Vegetables & Fruit<i class="fa-solid fa-chevron-right"></i></li>
                                    <li><img src="/assets/img/main-categori/cup.svg" alt="">Beverages<i
                                            class="fa-solid fa-chevron-right"></i></li>
                                    <li><img src="/assets/img/main-categori/breakfast.svg" alt="">Meats & Seafood<i
                                            class="fa-solid fa-chevron-right"></i></li>
                                    <li><img src="/assets/img/main-categori/frozen.svg" alt="">Frozen Foods<i
                                            class="fa-solid fa-chevron-right"></i></li>
                                    <li><img src="/assets/img/main-categori/grocery.svg" alt="">Biscuits & Snacks<i
                                            class="fa-solid fa-chevron-right"></i></li>
                                    <li><img src="/assets/img/main-categori/biscuit.svg" alt="">Grocery & Staples<i
                                            class="fa-solid fa-chevron-right"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="main-link-menu">
                        <div class="dropdown Home">

                            <a href="">Home<i class="fa-solid fa-chevron-down"></i></a>


                            <div class="dropdown-content "
                                style="margin-top: -40px;margin-left: -10px;height: 450px;width: 200px;">
                                <div class="Categorie">
                                    <ul>
                                        <li> Kartshop</li>
                                        <li>Sweetshop</li>
                                        <li>Organic</li>
                                        <li>Supershop</li>
                                        <li>Classic shop</li>
                                        <li>Furniture</li>
                                        <li>Search Oriented</li>
                                        <li>Category Focus</li>
                                        <li>Fashion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 1 -->
                        <div class="dropdown">

                            <a href="">Shop<i class="fa-solid fa-chevron-down"></i></a>



                            <div class="dropdown-content "
                                style="margin-top: -40px;margin-left: -10px;width: 250px;height: 400px;">
                                <div class="Categorie">
                                    <ul>
                                        <li> Shop Category Slider</li>
                                        <li>Shop Category Sidebar</li>
                                        <li>Shop Banner</li>
                                        <li>Shop Left Sidebar</li>
                                        <li>Shop List</li>
                                        <li>Shop Right Sidebar</li>
                                        <li>Shop Right Sidebar</li>
                                        <li>Shop Top Filter</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 1 -->
                        <div class="dropdown">

                            <a href="">Product<i class="fa-solid fa-chevron-down"></i></a>



                            <div class="dropdown-content "
                                style="margin-top: -40px;margin-left: -10px;height: 250px;width:250px;">
                                <div class="Categorie">
                                    <ul>
                                        <li> Product 4 Image</li>
                                        <li>Product Thumbnail</li>
                                        <li>Product Bundle</li>
                                        <li>Product Slider</li>
                                        <li>Product Sticky</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 1  chua lam-->
                        <div class="dropdown">

                            <a href="">Mega Menu<i class="fa-solid fa-chevron-down"></i></a>



                            <div class="dropdown-content " style="margin-top: -40px;margin-left: -10px;">
                                <div class="Categorie">
                                    <ul>
                                        <li> Kartshop</li>
                                        <li><img src="/assets/img/main-categori/cup.svg" alt="">Beverages<i
                                                class="fa-solid fa-chevron-right"></i></li>
                                        <li><img src="/assets/img/main-categori/breakfast.svg" alt="">Meats & Seafood<i
                                                class="fa-solid fa-chevron-right"></i></li>
                                        <li><img src="/assets/img/main-categori/frozen.svg" alt="">Frozen Foods<i
                                                class="fa-solid fa-chevron-right"></i></li>
                                        <li><img src="/assets/img/main-categori/grocery.svg" alt="">Biscuits & Snacks<i
                                                class="fa-solid fa-chevron-right"></i></li>
                                        <li><img src="/assets/img/main-categori/biscuit.svg" alt="">Grocery & Staples<i
                                                class="fa-solid fa-chevron-right"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 1 -->
                        <div class="dropdown">

                            <a href="">Blog<i class="fa-solid fa-chevron-down"></i></a>



                            <div class="dropdown-content "
                                style="margin-top: -40px;margin-left: -10px;height: 180px;width: 150px    ;">
                                <div class="Categorie">
                                    <ul>
                                        <li> Blog Detail</li>
                                        <li>Blog Grid</li>
                                        <li>Blog List</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 1 -->
                        <div class="dropdown">

                            <div class="page">
                                <label for="">New</label>
                                <a href="">Pages<i class="fa-solid fa-chevron-down"></i></a>


                            </div>


                            <div class="dropdown-content pagedr"
                                style="margin-top: -30px;margin-left: -10px; height: 500px;width: 200px;">
                                <div class="Categorie">
                                    <ul>
                                        <li> Email Template</li>
                                        <li>Invoice Template</li>
                                        <li>404</li>
                                        <li>About Us</li>
                                        <li>Cart</li>
                                        <li>Contact</li>
                                        <li>Checkout</li>
                                        <li>Coming Soon</li>
                                        <li>Compare</li>
                                        <li>Faq</li>
                                        <li>Order Success</li>
                                        <li>Order Tracking</li>
                                        <li>OTP</li>
                                        <li>Search </li>
                                        <li>User Dashboard</li>
                                        <li>Wishlist</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 1 -->
                        <div class="dropdown">

                            <a href="">Seller<i class="fa-solid fa-chevron-down"></i></a>



                            <div class="dropdown-content "
                                style="margin-top: -40px;margin-left: -10px;width: 200px;height: 280px;">
                                <div class="Categorie">
                                    <ul>
                                        <li> Become a Seller</li>
                                        <li> Seller Dashboardr</li>
                                        <li> Seller Detail</li>
                                        <li> Seller Detail 2</li>
                                        <li> Seller Grid</li>
                                        <li> Seller Grid 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 1 -->

                    </div>
                    <div class="deal">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-zap">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                            Deal Today
                        </button>
                    </div>



                </div>
                <div class="main-mean">
                    <div class="mean-left">
                        <img src="/assets/img/main-mean/images.jfif" alt="">
                        <div class="describe">
                            <p
                                style="font-size: 14px;
                                                                    letter-spacing: 0.1px;color: #ffffff;font-weight: 700;font-family: bold;">
                                Fresh
                                &
                                Delicious
                            </p>
                            <h2 style="font-size: calc(25px + (38 - 25) * ((100vw - 320px) / (1920 - 320)));font-weight: 700;line-height: 1;
                                                                    text-transform: capitalize;color: #ffffff;">Fresh Bread
                            </h2>
                            <p style="color: white;font-weight: 700;">Bento box burritos cherry bomb pepper dark and stormy
                                with ginger..</p>
                            <p style="color: white;font-weight: 700;">Shop Now</p>
                        </div>
                    </div>
                    <div class="mean-mid">
                        <img src="/assets/img/main-mean/Delicious_Cookies_For_Your_Morning_Brew.png" alt="">
                        <div class="describe">
                            <h6 style="    font-size: 14px;
                                                                    letter-spacing: 0.1px;
                                                                    color: #4a5568;">
                                Exclusive offer
                                <span
                                    style="border-radius: 50px;
                                                                        color: #ff4f4f;    background: linear-gradient(90deg, rgba(255,114,114,0.15) 0%, rgba(255,114,114,0) 79%);    font-weight: 500;
                                                padding: calc(6px + (10 - 6) * ((100vw - 320px) / (1920 - 320))) calc(8px + (16 - 8) * ((100vw - 320px) / (1920 - 320)));">30%
                                    Off</span>
                            </h6>

                            <h1
                                style="line-height: calc(29px + (63 - 29) * ((100vw - 320px) / (1920 - 320)));opacity: 1.5;font-size: calc(25px + (42 - 25) * ((100vw - 320px) / (1920 - 320)));">
                                WE'LL MAKE
                                <span class="name" style="    font-weight: bold;
                                                                        color: #d99f46;">HANDMADE</span>
                                <span> YOUR
                                </span>
                                <span> SWEET
                                </span>

                            </h1>

                            <p
                                style="color: #4a5568;
                                                                    letter-spacing: 0.8px;
                                                                    line-height: calc(19px + (27 - 19) * ((100vw - 320px) / (1920 - 320)));font-size: 14px;">
                                Earl
                                grey latte Thai basil curry grains alfalfa sprouts banana bread ginger...</p>
                            <button
                                style="background: #d99f46;    padding: calc(7px + (14 - 7) * ((100vw - 320px) / (1920 - 320))) calc(14px + (32 - 14) * ((100vw - 320px) / (1920 - 320)));
                                                                    font-weight: 500;border: none;
                                                font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));border-radius: 5px;">Shop
                                Now</button>
                        </div>

                    </div>
                    <div class="mean-right">
                        <img src="/assets/img/main-mean/3437941.webp" alt="">
                        <div class="describe">
                            <p
                                style="font-size: 14px;
                                                                    letter-spacing: 0.1px;color: #ffffff;font-weight: 700;font-family: bold;">
                                Fresh
                                &
                                Delicious
                            </p>
                            <h2 style="font-size: calc(25px + (38 - 25) * ((100vw - 320px) / (1920 - 320)));font-weight: 700;line-height: 1;
                                                                    text-transform: capitalize;color: #ffffff;">Fresh Bread
                            </h2>
                            <p style="color: white;font-weight: 700;">Peanut butter crunch chia seeds red parsley basil
                                overflowing..</p>
                            <p style="color: white;font-weight: 700;">Shop Now</p>
                        </div>
                    </div>

                </div>

                <MainAdv></MainAdv>
                <div class="main-sale">
                    <MainSale ></MainSale>
                </div>
                <div class="main-content">
                    <div class="main-left mr10">
                        <div class="main-time main-small mt30 w100 d-flex jcsb flex-wrap">
                            <div class="time-top">
                                <h1>Top Save Today
                                </h1>
                                <button id="demo"
                                    style="   border: none; font-size: 14px; padding: 20px;  color: #fff;background-color:  #d99f46;padding: 8px;border-radius: 0 5px 5px 0;  ">
                                </button>
                            </div>
                            <MainContentBox ></MainContentBox>


                            <!-- 1 -->

                            <!-- 1 -->

                            <!-- 1 -->
                        </div>
                        <div class="main-cream">
                            <h1>
                                ALL KINDS OF CAKES
                            </h1>
                            <MainCartCream ></MainCartCream>



                        </div>
                    </div>
                    <div class="main-right">
                        <MainContentRightBanner></MainContentRightBanner>

                        <!-- banner -->
                    </div>

                </div>
                <MainSupperSale></MainSupperSale>


            </div>


        </div>


    </div>
</template>
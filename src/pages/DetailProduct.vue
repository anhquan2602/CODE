<script setup>
import BreadCrumb from './../components/common/BreadCrumb.vue';
import DetailSiderbarimg from './../components/componentsDetail/DetailSiderbarimg.vue';
import DetailBannerright from './../components/componentsDetail/DetailBannerright.vue';
import DetailSider from './../components/componentsDetail/DetailSider.vue';
import DetailBox from './../components/componentsDetail/DetailBox.vue';
</script>

<template>
    <div class="main-detail session-box mt50">
        <div class="abc d-flex">
            <div class="main-left-detail main-small d-flex">
                <div class="cake d-flex">
                    <div class="sidebar-img mr5">
                        <DetailSiderbarimg ></DetailSiderbarimg>
                    </div>
                    <div class="sider-img mr20">
                        <DetailSider></DetailSider>
                    </div>
                </div>
                <div class="des">
                    <span class="mb20" style="border-radius: 5px;color: #ff4f4f;background: linear-gradient(90deg, rgba(255,114,114,0.15) 0%, rgba(255,114,114,0) 79%);                                                                               font-weight: 700;padding: 8px;">30%
                        Off</span>
                    <h1 class="fw8 mb20 mt10">Creamy Chocolate Cake</h1>
                    <div class="price fz18 d-flex aic jcsb mt10 mb20">
                        <div class="price">
                            <h3 class="col-gr" style="font-weight: 600;display: inline;margin-top: 10px;;color: #d99f46;">
                                $49.50</h3>
                            <span
                                style="font-weight: 400;margin-left: 6px;text-decoration: line-through;color: #4a5568;">28.56</span>
                            <h3 class="fz14 col-gr fw800" style="display: inline;">(8% Off)</h3>
                        </div>
                        <div class="check fz12  ">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star mr20"></span>
                            <span class="fz13 ">23 Customer Review</span>
                        </div>
                    </div>
                    <h3 class="lh-18 fw800 fz14 op08">
                        Lollipop cake chocolate chocolate cake dessert jujubes.
                        Shortbread sugar plum dessert powder cookie sweet brownie.
                        Cake cookie apple pie dessert sugar plum muffin cheesecake.
                    </h3>
                    <hr class="op08 mt10 mb10">
                    <div class="weight mb20 ">
                        <h3 class="fw800 mb10">Weight</h3>
                        <div class="btn d-flex jcsb">
                            <button class="bg-gr h35 bdn boder-1 mr10" style="color: #f8f8f8;">1/2 KG</button>
                            <button class="h35 bdn">1 KG</button>
                            <button class="h35 bdn">1.5 KG</button>
                            <button class="h35 bdn">RED ROSEs</button>
                            <button class="h35 bdn">with pink ROSEs</button>
                        </div>
                    </div>
                    <div class="count d-flex aic jcsb mb20">
                        <div class="add d-flex aic jcsb ">
                            <i class="fa-solid fa-plus"></i>
                            <span>0</span>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <div class="count-btn">
                            <button> Add to cart</button>
                        </div>
                    </div>
                    <div class="buy-box mb20">
                        <a href="">
                            <i class="fa-regular fa-heart op08"></i>
                            <span>Add To Wishlist</span>
                        </a>
                        <a href="">
                            <i class="fa-regular fa-arrows-cross"></i>
                            <span>Add To compare</span>
                        </a>
                    </div>
                    <hr class="op08 mb20">
                    <div class="store">
                        <h3 class="fz16 mb20">Store Information</h3>
                        <h3 class="lh-16 fz14 op08 mb20" style="max-width: 380px;">Lollipop cake chocolate chocolate cake
                            dessert jujubes.
                            Shortbread sugar plum dessert powder cookie sweet brownie.</h3>
                    </div>
                    <div class="product-infor mb20">
                        <ul class="">
                            <li>Type : Black Forest</li>
                            <li>SKU : SDFVW65467</li>
                            <li>MFG : Jun 4, 2022</li>
                            <li>Stock : 2 Items Left</li>
                            <li>Tags : Cake, Backery</li>
                        </ul>
                    </div>
                    <hr class="mb20 op08">
                    <div class="Guaranteed">
                        <h4 class="mb10">Guaranteed Safe Checkout</h4>
                        <img class="" src="/assets/img/1.png" alt="">
                    </div>
                </div>
            </div>
            <div class="main-right-detail">
                <DetailBannerright ></DetailBannerright>


            </div>
        </div>

        <div class="main-left-detail-content main-small" style="position: absolute; top: 1300px;">
            <div class="nav-tab">
                <a href="" style="border-top: 2px solid #0da487;">Description</a>
                <a href="" style="background: #f8f8f8;">Additional info</a>
                <a href="" style="background: #f8f8f8;">Care Instuctions</a>
                <a href="" style="background: #f8f8f8;">Review</a>
            </div>
            <hr class="op08 mb30">
            <p class="mb30">Jelly beans carrot cake icing biscuit oat cake gummi bears tart.
                Lemon drops carrot cake pudding sweet gummi bears.
                Chocolate cake tart cupcake donut topping liquorice sugar plum chocolate bar.
                Jelly beans tiramisu caramels jujubes biscuit liquorice chocolate.
                Pudding toffee jujubes oat cake sweet roll.
                Lemon drops dessert croissant danish cake cupcake.
                Sweet roll candy chocolate toffee jelly sweet roll halvah brownie topping.
                Marshmallow powder candy sesame snaps jelly beans candy canes marshmallow gingerbread pie.</p>
            <h3 class="mb10">Organic:</h3>
            <p>vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum
                morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellen
                tesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient monte
                s nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus c
                ommodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id
                ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum
                est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis im
                perdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat
                interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.</p>

            <div class="main-left-detail-content-banner d-flex jcc aic mb20">
                <div class="summer d-flex jcc aic flex-col">
                    <h3 class="col-gr fz14" style="    letter-spacing: 12px;">SUMMER</h3>
                    <h1>Vegetables</h1>
                    <span>Sale up to 5% Off</span>

                </div>

            </div>
            <h3 class="mb20">From The Manufacturer:</h3>
            <p class="mb20">Jelly beans shortbread chupa chups carrot cake jelly-o halvah apple pie pudding
                gingerbread. Apple pie halvah cake tiramisu shortbread cotton candy croissant
                chocolate cake. Tart cupcake caramels gummi bears macaroon gingerbread fruitca
                ke marzipan wafer. Marzipan dessert cupcake ice cream tootsie roll. Brownie ch
                ocolate cake pudding cake powder candy ice cream ice cream cake.
                Jujubes soufflé chupa chups cake candy halvah donut. Tart tart icing lemon drop
                s fruitcake apple pie.
            </p>
            <p>
                Dessert liquorice tart soufflé chocolate bar apple pie pastry danish soufflé.
                Gummi bears halvah gingerbread jelly icing. Chocolate cake chocolate bar pudd
                ing chupa chups bear claw pie dragée donut halvah. Gummi bears cookie ice crea
                m jelly-o jujubes sweet croissant. Marzipan cotton candy gummi bears lemon dro
                ps lollipop lollipop chocolate. Ice cream cookie dragée cake sweet roll sweet roll.Lemon drops cookie
                muffin
                carrot cake chocolate marzipan gingerbread topping chocolate bar. Soufflé tiramisu pastry sweet dessert.
            </p>

        </div>
        <div class="Related-Products ">
            <h1>
                Related Products
            </h1>
            <div class="main-time d-flex aic jcsb w100 flex-wrap " style="margin: 0;">
                <DetailBox></DetailBox>



            </div>

        </div>



    </div>
</template>
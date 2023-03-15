

<script setup>
const good = [
    {   id:1,
        imageGood:"",
        titleGood:"",
        Price:"",
    }
]
</script>

<template>
    <div class="box">
        <img src="/assets/img/main.time/2.png" alt="">
        <div class="product-option">
            <i class="fa-regular fa-eye"></i>
            <i class="fa-solid fa-code-compare"></i>
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="content">
            <span style="font-weight:800;
                
                                                                            height: 20px;
                                                                            font-size: 14px;">Muffets & Tuffets Whole
            </span>
            <span style="font-weight: 800;
                                                                            height: 20px;
                                                                            font-size: 14px;">Wheat Bread 400 g</span>
            <div class="price">
                <span style="font-weight: 600;margin-top: 10px;;color: #d99f46;">$26.69</span>
                <span style="font-weight: 400;
                                                                            margin-left: 6px;
                                                                            font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));    text-decoration: line-through;
                                                                            color: #4a5568;">28.56</span>
            </div>

            <div class="check" style="margin-top: 10px;font-size: 12px;">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>

            <button class="add">Add
                <i class="fa-solid fa-plus"></i>

            </button>
        </div>
    </div>
</template>

<style scoped>
               /* <div class="box">
                    <img src="/assets/img/main.time/1.png" alt="">
                    <div class="product-option">
                        <i class="fa-regular fa-eye"></i>
                        <i class="fa-solid fa-code-compare"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="content">
                        <span style="font-weight:800;
                
                                                                        height: 20px;
                                                                        font-size: 14px;">Muffets & Tuffets Whole
                        </span>
                        <span style="font-weight: 800;
                                                                        height: 20px;
                                                                        font-size: 14px;">Wheat Bread 400 g</span>
                        <div class="price">
                            <span style="font-weight: 600;margin-top: 10px;;color: #d99f46;">$26.69</span>
                            <span style="font-weight: 400;
                                                                        margin-left: 6px;
                                                                        font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));    text-decoration: line-through;
                                                                        color: #4a5568;">28.56</span>
                        </div>

                        <div class="check" style="margin-top: 10px;font-size: 12px;">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>

                        <button class="add">Add
                            <i class="fa-solid fa-plus"></i>

                        </button>
                    </div>
                </div>
                <div class="box">
                    <img src="/assets/img/main.time/3.png" alt="">
                    <div class="product-option">
                        <i class="fa-regular fa-eye"></i>
                        <i class="fa-solid fa-code-compare"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="content">
                        <span style="font-weight:800;
                
                                                                        height: 20px;
                                                                        font-size: 14px;">Muffets & Tuffets Whole
                        </span>
                        <span style="font-weight: 800;
                                                                        height: 20px;
                                                                        font-size: 14px;">Wheat Bread 400 g</span>
                        <div class="price">
                            <span style="font-weight: 600;margin-top: 10px;;color: #d99f46;">$26.69</span>
                            <span style="font-weight: 400;
                                                                        margin-left: 6px;
                                                                        font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));    text-decoration: line-through;
                                                                        color: #4a5568;">28.56</span>
                        </div>

                        <div class="check" style="margin-top: 10px;font-size: 12px;">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>

                        <button class="add">Add
                            <i class="fa-solid fa-plus"></i>

                        </button>
                    </div>
                </div>
                <div class="box">
                    <img src="/assets/img/main.time/4.png" alt="">
                    <div class="product-option">
                        <i class="fa-regular fa-eye"></i>
                        <i class="fa-solid fa-code-compare"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="content">
                        <span style="font-weight:800;
                
                                                                        height: 20px;
                                                                        font-size: 14px;">Muffets & Tuffets Whole
                        </span>
                        <span style="font-weight: 800;
                                                                        height: 20px;
                                                                        font-size: 14px;">Wheat Bread 400 g</span>
                        <div class="price">
                            <span style="font-weight: 600;margin-top: 10px;;color: #d99f46;">$26.69</span>
                            <span style="font-weight: 400;
                                                                        margin-left: 6px;
                                                                        font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));    text-decoration: line-through;
                                                                        color: #4a5568;">28.56</span>
                        </div>

                        <div class="check" style="margin-top: 10px;font-size: 12px;">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>

                        <button class="add">Add
                            <i class="fa-solid fa-plus"></i>

                        </button>
                    </div>
                </div>
                <div class="box">
                    <img src="/assets/img/main.time/5.png" alt="">
                    <div class="product-option">
                        <i class="fa-regular fa-eye"></i>
                        <i class="fa-solid fa-code-compare"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="content">
                        <span style="font-weight:800;
                
                                                                        height: 20px;
                                                                        font-size: 14px;">Muffets & Tuffets Whole
                        </span>
                        <span style="font-weight: 800;
                                                                        height: 20px;
                                                                        font-size: 14px;">Wheat Bread 400 g</span>
                        <div class="price">
                            <span style="font-weight: 600;margin-top: 10px;;color: #d99f46;">$26.69</span>
                            <span style="font-weight: 400;
                                                                        margin-left: 6px;
                                                                        font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));    text-decoration: line-through;
                                                                        color: #4a5568;">28.56</span>
                        </div>

                        <div class="check" style="margin-top: 10px;font-size: 12px;">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>

                        <button class="add">Add
                            <i class="fa-solid fa-plus"></i>

                        </button>
                    </div>
                </div>
                <div class="box">
                    <img src="/assets/img/main.time/6.png" alt="">
                    <div class="product-option">
                        <i class="fa-regular fa-eye"></i>
                        <i class="fa-solid fa-code-compare"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="content">
                        <span style="font-weight:800;
                
                                                                        height: 20px;
                                                                        font-size: 14px;">Muffets & Tuffets Whole
                        </span>
                        <span style="font-weight: 800;
                                                                        height: 20px;
                                                                        font-size: 14px;">Wheat Bread 400 g</span>
                        <div class="price">
                            <span style="font-weight: 600;margin-top: 10px;;color: #d99f46;">$26.69</span>
                            <span style="font-weight: 400;
                                                                        margin-left: 6px;
                                                                        font-size: calc(13px + (14 - 13) * ((100vw - 320px) / (1920 - 320)));    text-decoration: line-through;
                                                                        color: #4a5568;">28.56</span>
                        </div>

                        <div class="check" style="margin-top: 10px;font-size: 12px;">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                        </div>

                        <button class="add">Add
                            <i class="fa-solid fa-plus"></i>

                        </button>
                    </div>
                </div> */
</style>

<template>
    <div class="card-div">
        <div class="box">
            <div class="imgBx">
                <slot name="img"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
        <!-- <div class="box">
            <div class="imgBx">
                <slot name="img"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="box">
            <div class="imgBx">
                <slot name="img"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div> -->


    </div>

</template>
<script>
export default {
    name: "CardComp"
}
</script>
<style scoped>

</style>
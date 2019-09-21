<template>
    <div>第一个单文件组键{{message}}
        <router-link to='/login'>登录页</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
// 必须暴露一个对象，对象是组件的配置
export default {
    data(){
        return {
            message:'nice'
        }
    }
}

</script>

<style>

</style>



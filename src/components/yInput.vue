<template>
    <div id="y-input">  
        <label>
            <span v-show="required" style="color: red;margin:0 6px 0 6px">*</span>
            <span :style="{'margin-left': required ? '0px' : '18px'}">{{label}}</span>
        </label>
        <input v-if="type !== 'textarea'" v-bind="$attrs" v-on="listeners" :value="value" :type="type"/>
        <textarea v-else v-bind="$attrs" v-on="listeners" :value="value" />
        <span v-show="icon"><i :class="icon"></i></span>
        <span v-show="warning" style="color: red; font-size: 16px;"><i class='fa fa-exclamation-triangle'></i></span>
    </div>
</template>

<script>
export default {
    name: 'y-input',
    props:{
        label:{
            type: String,
            required: true,
        },
        required:{
            type: Boolean,
            default: false
        },
        icon: String,
        value: null,
        warning:{
            type: Boolean,
            default: false
        },
        type: String,
    },
    computed: {
        listeners(){
            let vm = this 
            return {
                ...vm.$listeners,
                input(e){
                    vm.$emit('input', e.target.value)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#y-input{
    box-sizing: border-box;
    display: flex;
    min-height: 45px;
    background-color: white;
    label{
        width: 32%;
        display: flex;
        align-self: center;
    }
    input, textarea{
        width: 61%;
        border: 0;
        outline: 0;
        font-size: inherit;
    }
    &>span{
        box-sizing: border-box;
        width: 7%;
        padding-right: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}
</style>


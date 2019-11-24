<template>
        <div>
            <form>
                <input type="text" v-model="inputTitle" value=""/>
            </form>
            <div>
                <button v-on:click="addTitle" class="btn btn-primary">등록하기</button>
                <router-link to="/">
                    <button class="btn btn-secondary">목록으로</button>
                </router-link>
             
            </div>
        </div>
    </template>
    
    <script>
    export default {
        data() {
             return {
                 inputTitle : '',
                 num : 0
             } 
        },
        methods : {
            addTitle(){
                if(this.inputTitle != "")
                {
                    localStorage.setItem('title_'+this.num,this.inputTitle.trim());
                    this.$router.push({ path: '/' })
                    this.num++;
                }
           
            }
        }
      }
    </script>
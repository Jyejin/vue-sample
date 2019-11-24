<template>
    <div>
        <router-link to="/create">
            <button type="button" class="btn btn-primary" style="float:right;">추가하기</button>
        </router-link>
        <div>
            <table  width="200px" class="table table-hover">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="ok">
                        <tr v-for="(item, index) in items" >
                            <td>{{ index+1 }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.date }}</td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                        <td colspan="3">등록된 데이터가 없습니다.</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
         return {
             items : [],
             ok : false
         } 
    },
    created(){
        if(localStorage.length > 0){
            this.ok = true;
            for(var i=0;i<localStorage.length;i++)
            {
                this.items.push({"title":localStorage.getItem(localStorage.key(i)),"date":new Date()});
            }
            console.log(this.items)
        }
    }

  }
</script>
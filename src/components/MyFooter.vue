<template>
	<div class="todo-footer" >
		<label>
			
		</label>
		<span>
			<span>已完成{{ totol }}</span> / 全部{{todo1z}}
		</span>
        <button class="btn btn-danger" id="selectall" @click="delectAll">删除已选择任务</button> 
        <button class="btn btn-danger" id="selectall" @click="selectAll">选中所有任务</button> 
		 <button class="btn btn-danger" @click="clearAll">取消选中所有</button> 
	</div>
</template>

<script>
	export default {
        name:'MyFooter',
       props:['todos','delectAll1'],
       computed:{
        totol(){
           return this.todos.reduce((a,b)=>a + (b.done ? 1 : 0),0)
        },
        todo1z(){
            return this.todos.length
        }
       },
       methods: {
        clearAll(){
            this.todos.forEach(e => {
                e.done = false
            });
        },
        selectAll(){
            this.todos.forEach(e=>e.done = true)
        },
        delectAll(){
            this.delectAll1()
        }

       },
        
		
	}
</script>

<style scoped>
	/*footer*/
    #selectall{
        margin: 5px;
    }
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>
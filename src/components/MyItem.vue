<template>
	<li>
		<label>
		<input class="Check" type="checkbox" :checked="todoobj.done" @change="handleCheck(todoobj.id)"/> 
			
		 <span v-show="!todoobj.isEdit">{{todoobj.title}}</span> 
		 <input v-show="todoobj.isEdit" type="text" v-model="todoobj.title" ref="inputtick" @blur="handblur(todoobj,$event)">

		 

            
		</label>
		 <button class="btn btn-danger" @click="handleDelete(todoobj.id)">删除</button> 
		 <button  v-show="!todoobj.isEdit" class="btn btn-edit" @click="showisEdit(todoobj)">编辑</button>
	</li>
</template>

<script>
	export default {
		name:'MyItem',
        props:["todoobj"],
        methods:{
            //进行方法传递，可以间接的进行通信 ，查找todo的id值将done取反
          handleCheck(id){
                
		},
        
        handleDelete(id){
            if(confirm("确定删除吗？")){
                this.$bus.$emit('deleteTodo',id)
            
            }
        },
		showisEdit(todoobj){
			if (todoobj.hasOwnProperty('isEdit')) {
				todoobj.isEdit = true
			}else{
				this.$set(todoobj,'isEdit',true)
			}
			this.$nextTick(function(){
				this.$refs.inputtick.focus()
			}	
			)
		},
		//失去焦点时调用
		handblur(todoobj,e){
			todoobj.isEdit = false
			this.$bus.$emit('updataitem',todoobj.id,e.target.value)
			
		}
    },
    }
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #d77d7d;
	}

	li label {
		float: left;
		cursor: pointer;
        color:black;
        font-family:"宋体"
        ;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #a39898;
	}
	
	li:hover button{
		display: block;
	}
   
</style>
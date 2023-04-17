<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
        <h1 id="title1">todoList任务编辑器</h1>
        <!-- MyHeader -->
				<MyHeader :addobj="addobj"/>
        <!-- MyList -->
				<MyList :todos="todos" :checktodo="checktodo" :deleteTodo="deleteTodo"/>
				<!-- <MyFooter /> -->
        <MyFooter  :todos="todos" :delectAll1="delectAll1" />
			</div>
		</div>
	</div>
</template>

<script>
	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter.vue'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
				todos:JSON.parse(localStorage.getItem("todos")) || []
			}
		},
    methods:{
      //添加
      addobj(obj){
       this.todos.unshift(obj)
      },
      //取消勾选
      checktodo(id){
        //foreach运用表达式
        this.todos.forEach((todo)=>
        {if(todo.id === id) todo.done= !todo.done})
      },
      //删除对应id的信息(用过滤返回新的数组)
      deleteTodo(id){
       this.todos=this.todos.filter(a => a.id !== id)
      },
	  //删除所有item
      delectAll1(){
          this.todos= this.todos.filter(e=> e.done !==true)
        },
		//修改一个item
	  updataitem(id,value1){
			this.todos.forEach((a)=>{
			if(a.id === id)  a.title = value1
	  })
      
    }
},
	mounted(){
		this.$bus.$on("checktodo",this.checktodo)
		this.$bus.$on("deleteTodo",this.deleteTodo)
		this.$bus.$on("updataitem",this.updataitem)

	},
	beforeDestroy(){
		this.$bus.$off(["checktodo","deleteTodo","updataitem"])
	},
    watch:{
      todos:{
        deep:true,
        handler(new1){
          
           localStorage.setItem("todos",JSON.stringify(new1))
        }
      }
    }
}

		

</script>

<style>
body{
  background-image:url("../public/beijing.jpg");
        /* background-size:cover cover; */
        background-repeat:no-repeat;
        background-position: center center;
		
      }

#title1{
  font-family: "楷体";
  text-align: center;
  color: green;
}
	/*base*/
	/* body {
		background: #fff;
	} */
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-edit {
		color: #fff;
		background-color: green;
		border: 1px solid green;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		background-color: #fff;
		opacity: 0.7;
		padding: 10px;
		border: 1px solid  green;
		border-radius: 5px;
		padding-top: 100px;
		transform: scale(2);

	}
</style>

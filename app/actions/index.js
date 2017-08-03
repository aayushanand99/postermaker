export function action1(param){
	//Will return an action which is essentially an object
	//containing the action type and the param 
	console.log("action1 called")
	return {
		type:'action_1',
		param:param
	};
}
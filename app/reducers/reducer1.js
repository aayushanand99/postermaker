export default function(state = null,action){
	console.log("reached reducer")
	switch(action.type){
		case "action_1":
			console.log("reducer caught it")
			return [1,2,3,4]//always return a fresh object
	}
	return(state)//when the action is not related to the state taken care of
} 
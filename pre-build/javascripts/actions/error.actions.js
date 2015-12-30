const APP_ERR = "APP_ERR";


/*
**************
*~ Actions  ~*
**************
*/

const throwErr = function(err){
	return {
		type: APP_ERR,
		err
	}
};


module.exports = {
	throwErr
}

import {
	DRIVER_SIGNUP_STARTED,
	DRIVER_SIGNUP_SUCCESS,
	DRIVER_SIGNUP_FAILURE,
	DRIVER_LOGIN_STARTED,
	DRIVER_LOGIN_SUCCESS,
	DRIVER_LOGIN_FAILURE,
}from '../actions'


const initialState = {
	driverSignupStarted: false,
	driverLoginStarted: false,
	
	requestDetails:{},
	driverDetails:[
		{
			"userId" : "01",
			"displayName" : "Cop 1",
			"phone" : "01",
			"email" : "cop01@gmail.com",
			"earnedRatings" : 21,
			"totalRatings" : 25,
			"location" : {
				"type" : "Point",
				"address" : "SS Environs, Chellikere, 1st block, Chelekare, Kalyan Nagar, Bengaluru, Karnataka 560043, India",
				"coordinates" : [
					77.63997110000003,
					13.0280047
				]
			}
		},
	],
	
	riderDetails:
		{
			"requestTime" : {date:"2016-10-31T12:12:37.321Z"},
			"location" : {
				"coordinates" : [
					77.612257,
					12.934729
				],
				"address" : "The Forum, 21 Hosur Road, Bengaluru South, Karnataka, India"
			},
			"citizenId" : "citizen1",
			"status" : "engaged",
			"copId" : "06"
		}
}

export const driverReducer = (state = initialState, action)=>{
	switch(action.type){
		case DRIVER_SIGNUP_STARTED:
			return {...state,
				driverSignupStarted:true
			}
		case DRIVER_LOGIN_STARTED:
			return {...state,
				driverLoginStarted:true
			}
		default:
			return {...state}
	}
}

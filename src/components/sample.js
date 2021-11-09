import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from "react-redux";
import PropTypes from 'prop-types';
import { getEn,getNp, langChange} from "../actions/news";

const Comp = () =>{
	useEffect(() => {
    if(lang){
	    dispatch(getEn()); 
    }
    else{
        dispatch(getNp());
    }
	  },[]
	  );
	return(
		<div>Hey</div>)
}
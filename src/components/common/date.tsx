import React from "react";

export default function TodayD(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}`;
  
    return (
        <span>{date}</span> 
      );

}
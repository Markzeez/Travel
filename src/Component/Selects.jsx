import React from "react";
import SelectCards from "./SelectCards";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCards bg={"https://images.pexels.com/photos/4846505/pexels-photo-4846505.jpeg?auto=compress&cs=tinysrgb&w=600"} text='Bora Bora'/> 
      <SelectCards bg={"https://images.pexels.com/photos/4846518/pexels-photo-4846518.jpeg?auto=compress&cs=tinysrgb&w=600"} text='Bora Bora'/> 
      <SelectCards bg={"https://images.pexels.com/photos/4846496/pexels-photo-4846496.jpeg?auto=compress&cs=tinysrgb&w=600"} text='Bora Bora'/> 
      <SelectCards bg={"https://images.pexels.com/photos/2962392/pexels-photo-2962392.jpeg?auto=compress&cs=tinysrgb&w=600"} text='Bora Bora'/> 
      <SelectCards bg={"https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=800"} text='Bora Bora'/>
      <SelectCards bg={"https://images.pexels.com/photos/4846496/pexels-photo-4846496.jpeg?auto=compress&cs=tinysrgb&w=400"} text='Bora Bora'/>
    </div>
  );
};

export default Selects;

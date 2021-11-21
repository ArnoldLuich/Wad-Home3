import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
state: {
     productList:[
          {id: 1, time: "Nov 8 2021 14.04", postPic: "https://images.pexels.com/photos/4241412/pexels-photo-4241412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", postText: "I think it's going to rain", like:1},
          {id: 2, time: "Oct 10 2021 11.04", postPic: "", postText: "Witch weighs more, a pound of feaders or a pound of bricks?", like:0},
          {id: 3, time: "Sep 1 2021 20.56", postPic: "", postText: "Felt cute,might delete later", like:0},
          {id: 4, time: "Oct 22 2021 08.04" , postPic: "", postText: "I think it's going to rain", like:0},
          {id: 5, time: "Sep 4 2021 10.30" , postPic: "", postText: "Witch weighs more, a pound of feaders or a pound of bricks?", like:0},
          {id: 6, time: "Oct 1 2021 13.04" , postPic: "", postText: "Felt cute,might delete later", like: 0},
          {id: 7, time: "Nov 27 2021 22.10" , postPic: "", postText: "I think it's going to rain", like:0},
          {id: 8, time: "Oct 16 2021 21.08" , postPic: "", postText: "Witch weighs more, a pound of feaders or a pound of bricks?", like:0},
          {id: 9, time: "Nov 9 2021 19.02" , postPic: "", postText: "Felt cute,might delete later", like:0},
          {id: 10, time: "Nov 2 2021 18.04" , postPic: "", postText: "Witch weighs more, a pound of feaders or a pound of bricks?", like:0}
          ] 
 },





}); 

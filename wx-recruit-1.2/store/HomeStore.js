import Vue from 'vue'
import Vuex from 'vuex'
import GetAPI from '@/static/API/get.js'
Vue.use(Vuex);//vue的插件机制
const store = new Vuex.Store({
    state: {
        ALLdata:null,
        showdata:null,
        registerdata:[],
    },
    mutations: {
        upALLdata(state,Newdata){
            state.ALLdata = Newdata
        },
        upshowdata(state,Newdata){
            state.showdata = Newdata
        },
        upregisterdata(state,Newdata){
            state.registerdata = Newdata
        }
    },
    actions: {
        getALLdata({commit}){
            return new Promise((resolve, reject) => {
                GetAPI.getDATA()
                    .then(res => {
                        console.log('状态库已更新');
                        console.log(res);
                        commit("upALLdata", res);//调用mutation方法修改状态
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
            });
        },
    }
})

export default store
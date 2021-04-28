import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import auth from "./auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchName: '',
    error: null,
    products: [
      {
        "id": 1,
        "name": "Item name 1",
        "price": 575.09,
        "img": "Mask-1.png",
        "location": "Panama",
        "description": "Description",
        "favorite": false,
        "value": 1
      },
      {
        "id": 2,
        "name": "Item name 2",
        "price": 518.54,
        "img": "Mask-2.png",
        "location": "Cyprus",
        "description": "Description",
        "favorite": false,
        "value": 3
      },
      {
        "id": 3,
        "name": "Item name 3",
        "price": 185.3,
        "img": "Mask-3.png",
        "location": "OAE",
        "description": "Description",
        "favorite": false,
        "value": 1
      },
      {
        "id": 4,
        "name": "Item name 4",
        "price": 984.05,
        "img": "Mask-4.png",
        "location": "Florida",
        "description": "Description",
        "favorite": false,
        "value": 2
      },
      {
        "id": 5,
        "name": "Item name 5",
        "price": 263.08,
        "img": "Mask-5.png",
        "location": "Cyprus",
        "description": "Description",
        "favorite": false,
        "value": 3
      },
      {
        "id": 6,
        "name": "Item name 6",
        "price": 682.29,
        "img": "Mask-6.png",
        "location": "Florida",
        "description": "Description",
        "favorite": false,
        "value": 1
      },
      {
        "id": 7,
        "name": "Item name 7",
        "price": 190.67,
        "img": "Mask-7.png",
        "location": "Panama",
        "description": "Description",
        "favorite": false,
        "value": 1
      },
      {
        "id": 8,
        "name": "Item name 8",
        "price": 275.02,
        "img": "Mask-8.png",
        "location": "Florida",
        "description": "Description",
        "favorite": false,
        "value": 2
      },
      {
        "id": 9,
        "name": "Item name 9",
        "price": 155.54,
        "img": "Mask-9.png",
        "location": "OAE",
        "description": "Description",
        "favorite": false,
        "value": 2
      },
      {
        "id": 10,
        "name": "Item name 10",
        "price": 677.22,
        "img": "Mask-10.png",
        "location": "Cyprus",
        "description": "Description",
        "favorite": false,
        "value": 1
      },
      {
        "id": 11,
        "name": "Item name 11",
        "price": 219.43,
        "img": "Mask-11.png",
        "location": "Panama",
        "description": "Description",
        "favorite": false,
        "value": 2
      },
      {
        "id": 12,
        "name": "Item name 12",
        "price": 346.96,
        "img": "Mask-12.png",
        "location": "OAE",
        "description": "Description",
        "favorite": false,
        "value": 3
      }
    ],
    favorite: [],
    value: null
  },
  mutations: {
    SET_SEARCH_VALUE_TO_VUEX(state, searchName) {
      state.searchName = searchName
    },
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products
    },
    // SET_ERROR(state, error) {
    //   state.error = error
    // },
    // CLEAR_ERROR(state) {
    //   state.error = null
    // },
    SET_PRODUCT(state, product) {
      state.products.push(product)
    },
    SET_FAVORITE(state, product) {
      state.favorite.push(product)
    },
    REMOVE_FROM_FAVORITE(state, index) {
      state.favorite.splice(index, 1)
    },
    SET_SELECT(state, value) {
      state.value = value
    },
  },
  actions: {
    GET_SEARCH_VALUE_TO_VUEX({commit}, searchName) {
      commit('SET_SEARCH_VALUE_TO_VUEX', searchName)
    },
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products;
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    // ERROR(state) {
    //   state.error = error
    // },
    CREATE_PRODUCT({commit}, product) {
      commit('SET_PRODUCT', product)
    },
    ADD_TO_FAVORITE({commit}, product) {
      commit('SET_FAVORITE', product)
    },
    DELETE_FROM_FAVORITE({commit}, index) {
      commit('REMOVE_FROM_FAVORITE', index)
    },
    GET_SELECT({commit}, value) {
      commit('SET_SELECT', value)
    },
  },
  getters: {
    SEARCH_NAME(state) {
      return state.searchName
    },
    PRODUCTS(state) {
      return state.products
    },
    PRODUCT_BY_ID: state => id => state.products.find(product => product.id === id),
    FAVORITE(state) {
      return state.favorite
    },
    SELECT(state) {
      return state.value
    },
  },
  modules: {
    auth
  }
})

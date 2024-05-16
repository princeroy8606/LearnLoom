import axios from 'axios'


const API = axios.create({baseURL:'https://learnloomserver.onrender.com/'})

export const login  = (loginData) =>API.post('/auth/login',loginData)

export const signUp  = (regData) =>API.post('/auth/signup',regData)

// courses 

export const getAllCourses = ()=>API.get('/course/all')

export const buyOneCourse = (data)=>API.post('course/buyOne',data)

export const successPaymentRes = (resdata) => API.post('course/payment-success',resdata)

export const getCart = (userData) =>API.get(`course/cart/${userData}`)

export const addToCart = (data) =>API.post(`course/cart/add`,data)

export const removeFromCart = (data) =>API.post(`course/cart/remove`,data)
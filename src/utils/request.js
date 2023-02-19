import axios from "axios";
// 封装axios
/* 
baseURL根路径
timeout预处理时间
*/
const service = axios.create({
  baseURL: "",
  timeout: 5000,
});
//请求拦截器
service.interceptors.request.use(() => {});
// 响应拦截器
service.interceptors.response.use(() => {});
export default service;



import {postFormData, postJson} from '../utils/http'

// 正式
const domain1 = 'https://gwh.quanwangfa.com/alinew/'
// const domain1 = 'http://192.168.100.160:8833/'

//登录接口
export function login(body = {}) {
    return postJson(domain1+'gzh/lg', body)
}

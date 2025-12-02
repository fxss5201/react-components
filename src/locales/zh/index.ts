// 系统相关，勿修改
import system from './system.json'
import defaultJson from './default.json'
import menu from './menu.json'
import userInfo from './userInfo.json'
import login from './login.json'
import resetPassword from './resetPassword.json'
import components from './components.json'

// 语言分模块，每个模块对应一个 json 文件，每个 json 文件中包含的 key 都是唯一的
// default.json 中包含的 key 是全局的，其他模块中包含的 key 都是模块级别的
export default { ...defaultJson, userInfo, login, resetPassword, menu, components, system }

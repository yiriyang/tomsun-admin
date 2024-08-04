import Cookies from 'js-cookie'

// 项目token名称
export const tokenName = 'PROJECT_TOKEN'

// 获取token
export const getToken = (name: string): string | undefined => {
    return Cookies.get(name)
}

// 设置token
export const setToken = (name: string, _token: string) => {
    Cookies.set(name, _token)
}

export const removeToken = (name: string) => {
    Cookies.remove(name)
}

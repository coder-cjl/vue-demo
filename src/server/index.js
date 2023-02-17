export async function get(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return {
                data: data,
                code: response.status,
                message: '',
                ok: true
            }
        } else {
            throw {
                data: null,
                message: '请求出错',
                code: response.status,
                ok: false,
            }
        }
    } catch (e) {
        throw {
            message: e.message,
            ok: false,
        }
    }

}

export function post(url, {arg}) {

}
let url = "http://localhost:7901"

// 导出方法
module.exports = {
    getDATA: () => {
        //请求获取LBT
        return uni.request({
            url:`${url}/GetData`,
            method: "GET",
        }).then(res => {
            console.log(res.data.data)
            return res.data.data
        }).catch(err => {
            console.log(err)
            return null
        })
    }
}
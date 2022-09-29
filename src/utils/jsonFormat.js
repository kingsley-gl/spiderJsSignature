var jsonResult = (data, success) => {
    if (success === true) {
        return {
            statusCode: 1,
            success: success,
            message: "请求成功",
            data: data,
        }
    } else {
        return {
            statusCode: -1,
            success: success,
            message: "请求失败",
            data: data,
        }
    }
}

module.exports = jsonResult;
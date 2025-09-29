function fileUploadMock() {
  const timeOut = Math.random() * 1000
  const isSuccess = Math.random() < 0.6
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve({
          code: 200,
          message: '上传成功',
        })
      } else {
        reject({
          code: 500,
          message: '上传失败',
        })
      }
    }, timeOut)
  })
}

export default fileUploadMock

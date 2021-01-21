const { uploader } = require("../Config/cloudiNary")

async function uploads(filePath) {
    try {
        let result = await uploader.upload(filePath, {
            folder: "product",
            use_filename: true,
        })
        return result.url
    } catch (error) {
        throw error
    }
}

module.exports = uploads
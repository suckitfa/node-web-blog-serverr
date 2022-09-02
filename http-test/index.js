// const http = require('http')
// const querystring = require('querystring')
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         console.log('content-type = ', req.headers['content-type']);
//         let postData = ''
//         req.on('data', chunk => {
//             postData += chunk.toString();
//         })
//         req.on('end', () => {
//             console.log(postData)
//             res.end('Hello wolrd!')
//         })
//     } else {
//         console.log(req.method)
//         console.log(req.url)
//         req.query = querystring.parse(req.url.split('?')[1]);
//         res.end(JSON.stringify(req.query))
//     }
// })

// server.listen(8000, () => {
//     console.log('http://localhost:8000')
// })

const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
    const {
        method,
        url,
    } = req;
    const path = url.split('?')[0];
    const query = querystring.decode(url.split('?')[1]);
    // 设置返回格式json, 返回的永远是一个字符串或者二进制
    res.setHeader('content-type', 'application/json');
    // 返回数据
    const resData = {
        method,
        url,
        path,
        query
    }
    if (method === 'GET') {
        res.end(JSON.stringify(resData))
    }

    if (method === 'POST') {
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })

        req.on('end', () => {
            res.end(JSON.stringify({...resData, postData }));
        })
    }
})

server.listen(8000, () => {
    console.log('http://localhost:8000')
})
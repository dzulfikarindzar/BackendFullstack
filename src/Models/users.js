const db = require('../Config/db')
const users = {}


users.get = () =>{
    return new Promise((resolve, reject) =>{
        db.query("SELECT * FROM public.users ORDER BY id ASC")
        .then((res) => {
            if (res.rows.length == 0) {
                resolve("Data Kosong!")
            } else {
                resolve(res.rows)
            }
        })
        .catch((err) => {
            reject(err)
        })
    })
}

users.getByEmail = (email) =>{
    return new Promise((resolve, reject) =>{
        db.query(`SELECT * FROM public.users WHERE email='${email}'`)
        .then((res) => {
            resolve(res.rows)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

users.add = (data) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO public.users(name, email, "password", role) VALUES ('${data.name}', '${data.email}', '${data.password}', '${data.role}')`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject("Input users!")
        })
    })
}

users.update = (data) =>{
    return new Promise((resolve, reject) => {
        db.query(`UPDATE public.users SET name='${data.name}', email='${data.email}', password='${data.password}', WHERE id=${data.id}`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject("Check Data Kembali")
        })
    })
  }

users.del = (id) =>{
    return new Promise((resolve, reject) =>{
        db.query(`DELETE FROM public.users WHERE id=${id}`)
        .then((res) => {
            resolve(id)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

module.exports = users




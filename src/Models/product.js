const db = require('../Config/db')
const products = {}


products.getAll= () => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT product.id, product.name,  product.image, product.price, category.name AS category FROM public.product LEFT JOIN public.category ON category.id = product.id_category ORDER BY product.id ASC")
        .then((res) => {
          if (res.rows.length == 0) {
            resolve('Data pada tabel Kosong!');
          } else {
            resolve(res.rows);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  products.getSearch= (name) => {
    return new Promise((resolve, reject) => {
      db.query( `SELECT product.id, product.name,  product.image, product.price, category.name AS category FROM public.product LEFT JOIN public.category ON category.id = product.id_category WHERE product.name ILIKE '%${name}%'`)
        .then((res) => {
          if (res.rows.length == 0) {
            resolve('Data di tabel Kosong!');
          } else {
            resolve(res.rows);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  products.getSort= (order, sort) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT product.id, product.name,  product.image, product.price, category.name AS category FROM public.product LEFT JOIN public.category ON category.id = product.id_category ORDER BY ${order} ${sort}`,
      )
        .then((res) => {
          if (res.rows.length == 0) {
            resolve('Data di tabel kosong!');
          } else {
            resolve(res.rows);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  products.get= (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT product.id, product.name,  product.image, product.price, category.name AS category FROM public.product LEFT JOIN public.category ON category.id = product.id_category WHERE product.id=${id}`,
      )
        .then((res) => {
          if (res.rows.length == 0) {
            resolve('Data di tabel kosong!');
          } else {
            resolve(res.rows);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

products.addProd = (data, image) =>{
    return new Promise((resolve, reject) =>{
        db.query(`INSERT INTO public.product(name, image, price, id_category) VALUES ('${data.name}', '${image}', ${data.price}, ${data.id_category})`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject("Input data harus lengkap!")
        })
    })
}

products.updateProd = (data, image) =>{
    return new Promise((resolve, reject) =>{
        db.query(`UPDATE public.product SET name='${data.name}',  image='${image}', price=${data.price}, id_category='${data.id_category}' WHERE id=${data.id}`)
        .then((res) => {
            resolve(data)
        })
        .catch((err) => {
            reject(err)
        })
    })
}


products.delProd = (id) =>{
    return new Promise((resolve, reject) =>{
        db.query(`DELETE FROM public.product WHERE id=${id}`)
        .then((res) => {
            resolve("Data Sukses dihapus!")
        })
        .catch((err) => {
            reject(err)
        })
    })
}

module.exports = products




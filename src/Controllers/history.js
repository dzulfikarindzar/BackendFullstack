const history = {};
const model = require('../Models/history');
const respon = require('../Helpers/respon');

history.get = async (req, res) => {
    try{
      const result = await model.get();
      return respon(res, 200, result);
    }catch (error) {
      return respon(res, 500, error);
    };
  };

  history.add = async (req, res) => {
    try {
        const result = await model.add(req.body);
        return respon(res, 201, result);
    } catch (error){
        return respon(res, 400, error);
    };
    
};

history.update = async (req, res) => {
    try {
        const result = await model.update(req.body);
        return respon(res, 200, result);
    } catch (error){
        return respon(res, 400, error);
    };
};

history.del = async (req, res) => {
   try {
       const result = await model.del(req.params.id);
        return respon(res, 200, result);
   }catch (error) {
        return respon(res, 400, error);
   };
};


module.exports = history;
const generateRNP = require("../services/generateRPService");

const generateRP = async (req, res) => {
  const params = req.body.params;
  if(params.length){
    const result = await generateRNP(params)
    return res.status(200).json(result);
  }else
 return res.status(500).json({msg: 'Internal Server Error'});
};

module.exports = generateRP;
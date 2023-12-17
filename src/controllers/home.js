const ctrl = {};

const {Image} = require('../models')
const sidebar = require('../helpers/sidebar')

ctrl.index = async (req , res)=>{
    const images = Image.find().sort({timestamp : -1});
    let viewmodel = {images:[]};
    viewmodel.images = images ;
    viewmodel = await sidebar(viewmodel);
    res.render('index', viewmodel )
}

module.exports = ctrl

const Prospecto = require('../models/prospecto');


require('dotenv').config();

// const slugify = require('slugify');
// const post = require('../models/post');

exports.create = (req, res) => { 
console.log(req.body)
    const {_id, nameProspecto, firstSurname , lastSurname , streetAddress, numbAddress, nameAddress, zipCode, phone, rfc, status} = req.body
     //req.params
    console.log(req.data)
    switch(true){
        case !nameProspecto:
            return res.status(400).json({
                error: 'Nombre es requerido'
            });
        break;

        case !firstSurname:
            return res.status(400).json({
                error: 'Primer es apellido requerido'
            });
        break;

        case !streetAddress:
            return res.status(400).json({
                error: 'Calle es requerida'
            });
        break;

        case !numbAddress:
            return res.status(400).json({
                rror: 'Número de casa es requerido'
            });
        break;

        case !nameAddress:
            return res.status(400).json({
                error: 'Colonia es requerida'
            });
        break;

        case !zipCode:
            return res.status(400).json({
                error: 'Código postal es requerido'
            });
        break;

        case !phone:
            return res.status(400).json({
                error: 'Teléfono es requeridocxxxxxxxxxxxxxxxxx'
            });
        break;

        case !rfc:
            return res.status(400).json({
                error: 'RFC es requerido'
            });
        break;                


}
// create prospecto
    Prospecto.create({nameProspecto, firstSurname , lastSurname , streetAddress, numbAddress, nameAddress, zipCode, phone, rfc, status},(error, prospecto) => {
        if (error){
            console.log(prospecto);
            res.status(400).json({})
        }
        res.json(prospecto);
    });
};

//lista de prospectos
exports.list = (req, res) => {
    Prospecto.find({})
    .limit()
    .sort({createdAt:-1})
    .exec((err, prospectos)=>{
        if(err) console.log(err);
            res.json(prospectos);
    });

};



exports.read = (req, res) => {
    const { _id } =req.params;
    // console.log(req.params);

    Prospecto.findOne({ _id })
        .exec((err, prospecto) => {
            if(err) console.log(err);
            res.json(prospecto);
    });

};

//update prospecto
exports.update =(req, res) => {

    const { _id } = req.params;
    const {status, observaciones} = req.body

    Prospecto.findOneAndUpdate({ _id }, { status, observaciones }, { new: true }).exec((err, prospecto) => {
        if(err) console.log(err);
        res.json(prospecto);
    });
};

//uploadfile prospecto
exports.uploadFile = (req, res) => {

    res.json('Archivo se guardó correctamente');


};
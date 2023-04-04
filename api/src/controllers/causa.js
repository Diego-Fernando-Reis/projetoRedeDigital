import CausaRepository from "../models/causaModel.js";

function findAll(req, res) {
  CausaRepository.findAll().then((result) => res.json(result));
}

function findCausa(req, res) {
  CausaRepository.findByPk(req.params.id).then((result) => res.json(result));
}

async function addCausa(req, res) {
  try{
    const causa = await CausaRepository.create({
      nome: req.body.nome,
      descricao: req.body.descricao,
      cartaz: req.body.cartaz
    })

    res.json(causa);
  } catch(error){
    res.status(400).json({ message: error.message });
  }
}

async function updateCausa(req, res) {
  try{
    await CausaRepository.update(
      {
        nome: req.body.nome,
        descricao: req.body.descricao,
        cartaz: req.body.cartaz
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const causaAtualizada = await CausaRepository.findByPk(req.params.id);
    res.json(causaAtualizada);
  } catch(error){
    console.error(error);
    res.status(500).send('Erro ao atualizar a organização');
  }
  

  
}

async function deleteCausa(req, res) {
  await CausaRepository.destroy({
    where: {
      id: req.params.id,
    },
  });

  CausaRepository.findAll().then((result) => res.json(result));
}

export default { findAll, addCausa, findCausa, updateCausa, deleteCausa };
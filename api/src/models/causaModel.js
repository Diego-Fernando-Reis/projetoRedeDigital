import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("causa", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "O campo nome não pode ser vazio"
      },
      len:{
        args: [3,50],
        msg: "O campo nome deve ter mais de dois caracteres"
      } 
    }
  },
  descricao: {
    type: Sequelize.STRING,
    validate: {
      max: {
        args: 150,
        msg: "A descrição não pode ter mais de 150 caractéres."
      }
    }
  },
  cartaz: {
    type: Sequelize.STRING,
    validate: {
      isUrl: {
        args: {
          protocols: ['http', 'https'],
          require_protocol: true,
          require_tld: true,
        },
        msg: 'Foi fornecida uma url inválida!',
      },
    },
  },
}, {
  freezeTableName: true,
  tableName: 'causas',
  timestamps: false
});

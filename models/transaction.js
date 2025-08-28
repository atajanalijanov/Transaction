'use strict';
const { Model } = require('sequelize');
const dayjs = require('dayjs');
require('dayjs/locale/tk');
dayjs.locale('tk');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
    }
  }

  Transaction.init({
    title: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    type: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      get() {
        const rawDate = this.getDataValue('createdAt');
        return rawDate ? dayjs(rawDate).format('D MMMM YYYY') : null;
      }
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        const rawDate = this.getDataValue('updatedAt');
        return rawDate ? dayjs(rawDate).format('D MMMM YYYY, dddd HH:mm:ss') : null;
      }
    }
  }, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'transactions'
  });

  return Transaction;
};
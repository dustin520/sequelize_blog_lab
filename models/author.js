function Author(sequelize, DataTypes) {
	return sequelize.define('variable', {
		name: DataTypes.STRING
	});
};


module.exports = Author;
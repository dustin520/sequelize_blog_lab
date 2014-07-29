function Posts(sequelize, DataTypes) {
	return sequelize.define('variable', {
		name: DataTypes.STRING
	});
};

module.exports = Posts; 
function Author(sequelize, DataTypes) {
	return sequelize.define('author', {
		firstname: DataTypes.STRING,
		lastname: DataTypes.STRING
	})
}


module.exports = Author;
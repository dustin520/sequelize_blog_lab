function Posts(sequelize, DataTypes) {
	return sequelize.define('post', {
		title: DataTypes.STRING,
		body: DataTypes.TEXT,
		authorId: {
			type: DataTypes.INTEGER,
			foreignKey: true
		}
	})
}

module.exports = Posts; 
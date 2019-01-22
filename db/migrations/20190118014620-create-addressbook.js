module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('addressbook', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: '~',
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()'),
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('NOW()'),
        },
    }),
    down: queryInterface => queryInterface.dropTable('addressbook'),
};

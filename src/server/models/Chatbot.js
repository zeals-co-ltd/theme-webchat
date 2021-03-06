module.exports = (sequelize, Sequelize) => {
const Chatbot = sequelize.define('chatbots', {
    greeting: {
      type: Sequelize.STRING
    },
    label: {
      type: Sequelize.TEXT
    },
    bot_url: {
      type: Sequelize.TEXT
    }
  }, {
      underscored: true,
  });
  
  Chatbot.associate = (models) => {
    Chatbot.hasMany(models.scenarios);
  }

  return Chatbot;
}
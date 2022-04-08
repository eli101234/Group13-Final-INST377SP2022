export default (database, DataTypes) => {
  const Languages = database.define(
    'Languages',
    {
      language_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return Languages;
};
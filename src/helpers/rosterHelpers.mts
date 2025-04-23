export const rosterData = (db) => {
	return [
        {
          model: db.Player,
          as: 'goalie',
          required: false,
        },
        {
          model: db.Player,
          as: 'defense1',
          required: false,
        },
        {
          model: db.Player,
          as: 'defense2',
          required: false,
        },
        {
          model: db.Player,
          as: 'lsm',
          required: false,
        },
		{
          model: db.Player,
          as: 'ssdm',
          required: false,
        },
        {
          model: db.Player,
          as: 'fo',
          required: false,
        },
        {
          model: db.Player,
          as: 'midfield1',
          required: false,
        },
        {
          model: db.Player,
          as: 'midfield2',
          required: false,
        },
        {
          model: db.Player,
          as: 'attack1',
          required: false,
        },
        {
          model: db.Player,
          as: 'attack2',
          required: false,
        },
    ]
}

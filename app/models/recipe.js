const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema(
	{

        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
		ingredientsArr: [{
            ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Ingredient',
            },
            qty: {
                type: number
            }

        }],
        instructions: {
            type: String,
            required: true
        },
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Recipe', recipeSchema)

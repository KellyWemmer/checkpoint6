import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const CommentSchema = new Schema(
    {
        creatorId: {type: ObjectId, required: true, ref: 'Account'},
        eventId: {type: ObjectId, required: true, ref: 'Event'},
        body: {type: String, required: true}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('user', {
    localField: 'userId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true

})
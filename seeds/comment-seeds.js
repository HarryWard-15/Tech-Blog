const { Comment } = require('../models');

const commentData = [{
        commentContent: "Lorem ipsum dolor sit amet",
        userId: 1,
        postId: 1
    },
    {
        commentContent: "consectetur adipiscing elit",
        userId: 2,
        postId: 2
    },
    {
        commentContent: "sed do eiusmod tempor incididunt",
        userId: 3,
        postId: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
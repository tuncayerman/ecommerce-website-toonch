import JWT from "jsonwebtoken"

export const generateToken = (user) => {
    return JWT.sign(
        {
        _id: user._id,
        name: user.name,
        email: user.email,
        isadmin: user.isAdmin,
        }, 
        process.env.JWT_SECRET || 'somethingsecret',
        {
        expiresIn: '30d',
        }
    );
};
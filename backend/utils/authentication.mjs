import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = await req.headers["authorization"];

    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(200).send({
          message: "Auth failed",
          success: false,
        });
      } else {
        req.body.userId = decode.id;

        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};

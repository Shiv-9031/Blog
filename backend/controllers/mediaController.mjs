import mediaSchema from "../models/mediaSchema.mjs";

export const postProfilePic = async (req, res) => {
  try {
    const { userId, name } = req.body;
    const avatar = req.file.path;

    //searching document with userId
    const isUserIdAvatarExisted = await mediaSchema.findOne({ userId: userId });

    //conditions
    if (!isUserIdAvatarExisted) {
      const avatarFile = await mediaSchema({ userId, name, avatar });
      await avatarFile.save();

      if (avatarFile) {
        return res.status(200).json({
          success: true,
          avatarFile,
        });
      }
    }

    if (isUserIdAvatarExisted) {
      isUserIdAvatarExisted.avatar.unshift(avatar);

      await isUserIdAvatarExisted.save();

      res.status(200).json({
        success: true,
        message: "profile picture updated",
      });
    }
    //-------------------------
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error,
    });
  }
};

export const getProfilePic = async (req, res) => {
  try {
    const getAvatar = await mediaSchema.findOne({ userId: req.params.id });

    if (!getAvatar) {
      return res.status.json({
        success: false,
        message: "no profile pic",
      });
    }

    return res.status(200).json({
      success: true,
      profilePic: getAvatar.avatar[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

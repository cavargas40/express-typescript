import User, { IUser } from '../models/user.model';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status';

interface ICreateUserInput {
  email: IUser['email'];
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
}

export const createUser = async (
  { body: { email, firstName, lastName } },
  res
) => {
  try {
    const newUser: ICreateUserInput = { email, firstName, lastName };
    const user = await User.create(newUser);
    return res.status(OK).send({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send({
      success: false,
      error,
    });
  }
};

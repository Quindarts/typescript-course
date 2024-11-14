import { React } from 'react';
type User = {
    firstName: string,
    lastName: string,
    gender: string,

}
//Partial
type PartialUser = Partial<User>
// firstName?: string | undefined;
// lastName?: string | undefined;
// gender?: string | undefined;

//Required <> Partial
type RequiredUser = Required<User>
// firstName: string;
// lastName: string;
// gender: string;

//Pick
type PickUser = Pick<User, "id">
// type PickUser = {
//     id: unknown;
// }

//Omit
type OmitUser = Omit<User, 'firstName'>
// type OmitUser = {
//     lastName: string;
//     gender: string;
// }

//ReadOnly
type ReadOUser = Readonly<User>
//Promise

//Awaited

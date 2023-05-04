import { User } from "../user/user.class";

export class Request {
    id: number= 0;
    description: string= "0";
    justification: string= "";
    rejectionReason?: string= "";
    deliveryMode: string= "Pick-up";
    status: string= "NEW";
    total: number=0;

    userId: number= 0;
    user: User | null= null;
    userName!: string;
    requestlines: any;
}
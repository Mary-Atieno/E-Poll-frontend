export interface Voter {
    // admin = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    phone:string; 
    otp:string;
    verified:boolean;
    voted:boolean;
    otp_sent:number;
}

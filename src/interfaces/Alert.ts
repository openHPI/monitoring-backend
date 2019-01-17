export default interface Alert {
    alertId: string;
    message: string;
    details: string;
    time: string;
    duration: number;
    level: string;
    data: any;
    recoverable: boolean;
}

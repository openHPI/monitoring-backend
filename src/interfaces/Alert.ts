export default interface Alert {
    alertId: string;
    category: string;
    message: string;
    details: any;
    time: string;
    duration: number;
    level: string;
    data: any;
    recoverable: boolean;
}

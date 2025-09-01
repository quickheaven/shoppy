import { ErrorResponse } from "@/app/common/interfaces/error.interface";

export const getErrorMessage = (response: ErrorResponse): string => {
    if (response.message) {
        if (Array.isArray(response.message) && response.message.length > 0) {
            return formatErrorMessage(response.message[0]);
        } else if (typeof response.message === 'string') {
            return formatErrorMessage(response.message);
        }
    }
    return 'An unknown error occurred';
};

const formatErrorMessage = (message: string): string => {
    return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
}
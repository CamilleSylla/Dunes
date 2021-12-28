
export function getPageLength () {
}
export function isOdd (number) {return number % 2;}

export function userDevice() {
    const isMobile = window.orientation > -1;
        return isMobile ? true : null
}
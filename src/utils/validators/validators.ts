export {}

export const required = (value: string | undefined) => {
    if (value) return undefined
    return 'error message'
}

export const maxLengthCreator = (maxLength: number) => (value: string | undefined ) => {
    if (value && value.length > maxLength) return `Max Length is ${maxLength} symbols`
    return undefined
}
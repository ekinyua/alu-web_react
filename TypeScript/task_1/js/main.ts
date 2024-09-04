export interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propname: string]: any
}

export interface Directors extends Teacher {
    numberOfReports: number
}
interface Metric {
    coverage: number,
    bugs: number,
    vulnerabilities: number,
    hotspot: number,
    code_smells: number,
    organization: string,
    id: number,
    tribe: string,
    state:string,
    verificationState: string
}

export { Metric };